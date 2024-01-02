<template>
  <header>

    <TheNavigation> </TheNavigation>

  </header>

  <div>

  </div>

  <div class="container">
    <RouterView />
  </div>

  <body>

  </body>
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
    TheFooter,

  }
};
</script>
  
    