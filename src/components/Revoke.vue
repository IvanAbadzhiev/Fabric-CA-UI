<template>
    <div class="container-fluid">
        <app-header></app-header>
        <div class="row">
            <div class="col-sm-6">
                <fieldset>

                    <legend class="w-auto">Enroll Certificate</legend>

                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Enrollment ID</label>
                            <input type="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label>Reason</label>
                            <select class="form-control">
                                <option value="0">unspecified</option>
                                <option value="1">keycompromise</option>
                                <option value="2">cacompromise</option>
                                <option value="3">affiliationchange</option>
                                <option value="4">superseded</option>
                                <option value="5">cessationofoperation</option>
                                <option value="6">certificatehold</option>
                                <option value="7">removefromcrl</option>
                                <option value="8">privilegewithdrawn</option>
                                <option value="9">aacompromise</option>
                            </select>
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
        name: "Revoke",
        components: {
            appHeader: Header
        }
    }
</script>

<style scoped>

</style>
