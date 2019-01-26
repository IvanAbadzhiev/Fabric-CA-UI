const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



const Fabric_Client = require('fabric-client');
const fabric_client = new Fabric_Client();
const Fabric_CA_Client = require('fabric-ca-client');

const path = require('path');
const util = require('util');
const os = require('os');

let admin_user = null;

let store_path = path.join(__dirname, 'hfc-key-store');

app.post('/enroll-admin',(req, res) => {
	const name = req.body.name;
	const password = req.body.password;
	const ca_server = req.body.ca_server;

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
	    
	    fabric_ca_client = new Fabric_CA_Client(ca_server, tlsOptions , '', crypto_suite);

	    // first check to see if the admin is already enrolled
	    return fabric_client.getUserContext(name, true);
	})
	.then((user_from_store) => {
		if (user_from_store && user_from_store.isEnrolled()) {
	        res.send(JSON.stringify({ success: false, message : 'The user already exist' }));
	        return null;
	    } else {
	        // need to enroll it with CA server
	        return fabric_ca_client.enroll({
	          enrollmentID: name,
	          enrollmentSecret: password
	        }).then((enrollment) => {
	          res.send(JSON.stringify({ success : false, message : 'The certificate is enrolled', data: enrollment }));
	          
	          //TODO: save the certificate as file
	          return fabric_client.createUser({
	              	username: name,
	                mspid: 'Org1MSP',
	                cryptoContent: { privateKeyPEM: enrollment.key.toBytes(), signedCertPEM: enrollment.certificate }
	              });

	        }).then((user) => {
	          
	          admin_user = user;
	          return fabric_client.setUserContext(admin_user);
	        
	        }).catch((err) => {
	          res.send(JSON.stringify({ success : false, message: 'Failed to enroll and persist admin.' }));
	          throw new Error('Failed to enroll admin');
	        });
	    }
	});
});

app.post('/register-identity', (req, res) => {
	let name = req.body.name;
	let affiliation = req.body.affiliation;
	let password = req.body.password;
	
});

app.listen(3000,() => {
  console.log("Started on PORT 3000");
});