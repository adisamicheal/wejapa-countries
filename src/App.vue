<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CountryDirectories />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CountryDirectories from './components/CountriesPopulate.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
     CountryDirectories
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
</style>
