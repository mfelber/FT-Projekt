<template>
  <header>
     
    <TheNavigation></TheNavigation>
  
    </header>
    <div class="container">
    <RouterView />
     </div>
    </template>
  <script>
  import TheNavigation from './components/TheNavigation.vue';
  import { RouterView } from 'vue-router';
  
  export default {
    components: {
      TheNavigation
    }
  };
  </script>
  
    