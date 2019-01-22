<template>
    <div class="container-fluid">
        <app-header></app-header>

        <div class="row">
            <div class="col-sm-6">
                <fieldset>

                    <legend class="w-auto">Enroll Admin identity</legend>

                    <form>
                        <div class="form-group">
                            <label>ID Name</label>
                            <input type="email" class="form-control" placeholder="Enter name of the identity">
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>

                        <button type="submit" class="btn btn-primary">Enroll Admin</button>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header';

    export default {
        name: 'Dashboard',
        data() {
            return {}
        },
        components: {
            appHeader: Header
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
