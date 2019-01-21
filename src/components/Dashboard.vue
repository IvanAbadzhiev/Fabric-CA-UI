<template>
  <div class="container-fluid">
    <app-header></app-header>
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
