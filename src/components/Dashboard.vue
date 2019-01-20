<template>
  <div class="container-fluid">
    <app-header></app-header>

    <div class="row">
      <div class="col-sm-6">
        <fieldset>
          
          <legend  class="w-auto">Register Identity</legend>

          <form>
            
            <div class="form-group">
              <label for="exampleInputEmail1">ID Name</label>
              <input type="text" class="form-control" placeholder="Enter the name of the participant">
              <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
            
            <div class="form-group">
              <label for="exampleInputPassword1">Affiliations</label>
              <select class="form-control">
                <option>Org1</option>
                <option>Org1.department1</option>
              </select>
              <small class="form-text text-muted">In which affiliation the identity will participate</small>
            </div>

             <div class="form-group">
              <label for="exampleInputEmail1">Password (Optional)</label>
              <input type="text" class="form-control" placeholder="Enter a password for issuing certificate"/>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Affiliations</label>
              <input type="checkbox" class="form-control"/> hf.GenCRL
              <input type="checkbox" class="form-control"/> hf.Revoker
              <input type="checkbox" class="form-control"/> hf.AffiliationMgr
              <input type="checkbox" class="form-control"/> hf.IntermediateCA
            </div>
            
            <button type="submit" class="btn btn-primary">Register Identity</button>

          </form>
        </fieldset>
      </div>

      <div class="col-sm-6">
        <fieldset>
          
          <legend  class="w-auto">Enroll Certificate</legend>

          <form>
            
            <div class="form-group">
              <label for="exampleInputEmail1">ID Name</label>
              <input type="email" class="form-control" placeholder="Enter name of the identity">
            </div>
            
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
  name: 'Dashboard',
  data () {
    return {
    }
  },
  components : {
    appHeader : Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
