<template>
  <header>
     
    <TheNavigation></TheNavigation>
  
    </header>
    <div class="container">
    <RouterView />
     </div>

     <br>
     <br>
     <footer>
      <TheFooter></TheFooter>
     </footer>
    </template>
  <script>
  import TheNavigation from './components/TheNavigation.vue';
  import TheFooter from './components/TheFooter.vue'
  import { RouterView } from 'vue-router';
  
  export default {
    components: {
      TheNavigation,
      TheFooter
    }
  };
  </script>
  
    