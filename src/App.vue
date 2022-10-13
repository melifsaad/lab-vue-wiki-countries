<template>
  <Navbar />
  <CountriesList :countries="countries" />
  <router-view></router-view>
</template>
  
<script setup>
import Navbar from './components/navbar.vue';
import countries from './assets/countries.json';
   
</script>
  
<style scoped>
  
</style>
