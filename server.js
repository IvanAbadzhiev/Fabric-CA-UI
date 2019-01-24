const express = require('express');
const app = express();

const Fabric_Client = require('fabric-client');
const fabric_client = new Fabric_Client();
const Fabric_CA_Client = require('fabric-ca-client');

const path = require('path');
const util = require('util');
const os = require('os');

let admin_user = null;

let store_path = path.join(__dirname, 'hfc-key-store');

Fabric_Client.newDefaultKeyValueStore({ path: store_path })
.then((state_store) => {
	fabric_client.setStateStore(state_store);
    let crypto_suite = Fabric_Client.newCryptoSuite();
    

    let crypto_store = Fabric_Client.newCryptoKeyStore({path: store_path});
    crypto_suite.setCryptoKeyStore(crypto_store);
    fabric_client.setCryptoSuite(crypto_suite);
    
    let	tlsOptions = {
    	trustedRoots: [],
    	verify: false
    };
    
    fabric_ca_client = new Fabric_CA_Client('http://localhost:7054', tlsOptions , '', crypto_suite);

    // first check to see if the admin is already enrolled
    return fabric_client.getUserContext('admin', true);
})
.then((user_from_store) => {

	if (user_from_store && user_from_store.isEnrolled()) {
        
        console.log('Successfully loaded admin from persistence');
        admin_user = user_from_store;
        return null;
    
    } else {
    	console.log('the user is not enrolled')
        // need to enroll it with CA server
        return fabric_ca_client.enroll({
          enrollmentID: 'admin',
          enrollmentSecret: 'adminpw'
        }).then((enrollment) => {
          console.log('Successfully enrolled admin user "admin"');

          //TODO: save the certificate as file
          return fabric_client.createUser({
              	username: 'admin',
                mspid: 'Org1MSP',
                cryptoContent: { privateKeyPEM: enrollment.key.toBytes(), signedCertPEM: enrollment.certificate }
              });
        }).then((user) => {
          admin_user = user;
          return fabric_client.setUserContext(admin_user);
        }).catch((err) => {
          console.error('Failed to enroll and persist admin. Error: ' + err.stack ? err.stack : err);
          throw new Error('Failed to enroll admin');
        });
    }
})

