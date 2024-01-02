<!-- <template>
  <main>
    
      <div v-for="(game, gameId) in games.games" :key="gameId" class="game-container">
        <div class="game-frame">
            <img :src="'/images/' + game.image" :alt="game.name" class="game-image">
            <div class="game-details">
          <h3>{{ game.name }}</h3>
          <h3>Price: {{ game.price }}</h3>
          <h3>{{ game.gameID }}</h3>
          <button @click="cart.addToCart(game.gameID)"><v-icon>mdi-cart</v-icon>TO CART</button>
        </div>
        </div>
      </div>
<br>
<br>
  </main>
</template>
    
<script>
import {useGamesStore} from '../stores/CartStores'
import Store from '../data.json';

export default{
    data() {
        return {
            game: Store.store,
            cart : useGamesStore()

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

  .game-image {
    width: 350px; 
    height: 450px; 
    object-fit: cover; 
  }
</style>
 -->




<template>
    <main>
        <div v-for="(game, gameId) in games" :key="gameId" class="game-container">
            <div class="game-frame">
                <img :src="'/images/' + game.image" :alt="game.name" class="game-image">
                <div class="game-details">
                    <h3>{{ game.name }}</h3>
                    <h3>Price: {{ game.price }}</h3>
                    <h3>{{ game.gameID }}</h3>

                    <v-snackbar  :timeout="3000" color="success" variant="tonal" >
                        <template v-slot:activator="{ props }">
                            <v-btn @click="cart.addToCart(game.gameID)" color="primary" variant="tonal" class="ma-2"
                                v-bind="props"><v-icon>mdi-cart</v-icon>TO CART</v-btn>
                        </template>
                         <strong>The game has been successfully added to your shopping cart.</strong>.
                    </v-snackbar>
                </div>
            </div>
        </div>
        <br>
        <br>
    </main>
</template>
  
<script>
import { useGamesStore } from '../stores/CartStores';
import Store from '../data.json';

export default {
    data() {
        return {
            game: Store.store,
            cart: useGamesStore(),
        };
    },
    props: {
        slug: { type: String, required: true },
    },
    computed: {
        games() {
            return this.findBySlug(this.slug).games;
        },
    },
    methods: {
        findBySlug(slug) {
            return this.game.find((platform) => platform.slug === slug);
        },
    },
};
</script>
  
<style>
.game-container {
    display: inline-block;
    margin-right: 20px;
}

.game-details {
    text-align: center;
}

.game-image {
    width: 350px;
    height: 450px;
    object-fit: cover;
}


</style>
  
  
