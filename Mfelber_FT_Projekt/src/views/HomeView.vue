<template>
    <div class="home">
      <h1>All Games</h1>
      <div class="destinations">
      <div v-for="platform in store" :key="platform.id">
          <h2>{{ platform.name }}</h2>
          <div v-for="game in platform[`${platform.slug}-games`]" :key="game.slug">
            <img :src="'/images/' + game.image" :alt="game.name">
            <h3>{{ game.name }}</h3>
            <h3>{{ game.price }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Store from '../data.json';
  
  export default {
    data() {
      return {
        store: Store.store,
      };
    },
  };
  </script>
  

  