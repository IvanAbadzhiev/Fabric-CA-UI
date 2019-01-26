<template>
    <div class="container-fluid">
        <app-header></app-header>

        <div class="row">
            <div class="col-sm-6">
                <fieldset>

                    <legend class="w-auto">Enroll Admin identity</legend>

                    <form>
                        <div v-if="errorMsg" class="alert alert-danger" role="alert">
                          {{ errorMsg }}
                        </div>

                         <div v-if="successMsg" class="alert alert-success" role="alert">
                          {{ successMsg }}
                        </div>

                        <div class="form-group">
                            <label>ID Name</label>
                            <input type="text" class="form-control" v-model="name" placeholder="Enter name of the identity">
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" v-model="password" placeholder="Password">
                        </div>

                        <button @click.stop.prevent="enrollAdmin" class="btn btn-primary">Enroll Admin</button>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    import axios from 'axios';

    export default {
        name: 'Dashboard',
        data() {
            return {
                name : '',
                password : '',
                errorMsg : '',
                successMsg : ''
            }
        },
        methods: {
            enrollAdmin() {
                this.successMsg = '';
                this.errorMsg = '';

                axios.post('http://localhost:3000/enroll-admin',{
                    name : this.name,
                    password : this.password,
                    ca_server : 'http://localhost:7054'
                })
                .then((result) => {
                    // let result = JSON.parse(data);
                    
                    console.log(result);
                    debugger;
                    if(result.data.success) {
                        this.successMsg = result.data.message;
                    } else {
                        this.errorMsg = result.data.message;
                    }
                })
                .catch((err) => {
                    this.errorMsg = err.toString();
                });
            }
        },
        components: {
            appHeader: Header
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
