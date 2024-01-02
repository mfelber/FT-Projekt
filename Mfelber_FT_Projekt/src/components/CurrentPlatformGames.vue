<template>
    <div class="home">
    <div v-for="games in games.games" :key="games.slug" class="game-container">
        <div class="game-frame">
            <img :src="'/images/' + games.image" :alt="games.name">
            <div class="game-details">
            <h3>{{ games.name }}</h3>
            <h3>{{ games.price }}</h3>
            <br>
            <button><v-icon>mdi-cart</v-icon>TO CART</button>
            </div>         
        </div>
    </div>
</div>

</template>
<script>
import Store from '../data.json';

export default{
    data() {
        return {
            game: Store.store

        }
    },
    props: {
        slug: { type: String, required: true },
    },
    computed: {
        games() {
            return this.findBySlug(this.slug);
        }
    },
    methods: {
        findBySlug(slug){
            return this.game.find((game)=> game.slug === slug)
        }
    }
}
</script>
<style>
  .game-container {
    display: inline-block; 
    margin-right: 20px; 
  }

  .game-details {
    text-align: center; 
  }
</style>