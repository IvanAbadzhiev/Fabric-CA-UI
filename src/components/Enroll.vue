<template>
    <div class="container-fluid">
        <app-header></app-header>
        <div class="row">
            <div class="col-sm-6">
                <fieldset>

                    <legend class="w-auto">Enroll Certificate</legend>

                    <form>

                        <div class="form-group">
                            <label for="exampleInputEmail1">ID Name</label>
                            <input type="email" class="form-control" placeholder="Enter name of the identity">
                        </div>

                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                   placeholder="Password">
                        </div>

                        <button type="submit" class="btn btn-primary">Enroll certificate</button>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from './Header';

    export default {
        name: "Enroll",
        components: {
            appHeader: Header
        }
    }
</script>

<style scoped>

</style>
