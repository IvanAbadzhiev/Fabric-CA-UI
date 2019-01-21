<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Fabri CA UI</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>

        <li class="nav-item active">
          <router-link class="nav-link" to="/register">
              <a>Register Identity <span class="sr-only">(current)</span></a>
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" to="/enroll">
              <a>Enroll Certificate <span class="sr-only">(current)</span></a>
          </router-link>
        </li>

        <li class="nav-item active">
          <router-link class="nav-link" to="/revoke">
              <a>Revoke certificate <span class="sr-only">(current)</span></a>
          </router-link>
        </li>
	    </ul>
	    <form class="form-inline my-4 my-lg-0">
	    	<label class="mr-sm-2">CA Server</label>
	      	<input class="form-control mr-sm-2" type="text" v-model="ca_server">
	    </form>
	  </div>
	</nav>
</template>

<script>
	export default {
		name : 'Header',
		data() {
			return {
				ca_server : 'http://localhost:7054'
			}
		}
	}
</script>

<style scoped>
	
</style>
