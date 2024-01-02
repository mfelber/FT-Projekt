import { defineStore } from 'pinia';
import gameData from '../data.json';

export const useGamesStore = defineStore('gamesStore', {
  state: () => ({
    items : 0,
    games: gameData.store,
    cart: [],
  }),
  getters: {
    getGameID: (state) => (gameId) => {      
      const allGames = state.games.flatMap(platform => platform.games); // flatmap urobi to ze v mojom pripade mam pole platfotiem a kazda platforma ma pole hier 
      //flatmap sposobi to ze dostanem ciste pole vsetkych hier v platormach a nemusim pouzivat ine vlastne funckie na to aby som sa k tomu id dostal 
      return allGames.find((game) => game.gameID === gameId);
    },
    cartItems(){
        return this.cart
    },
    getNumberOfItems: (state) => {
        return state.items
    }
    
    

  },
  actions: {
    addToCart(itemID) {
      console.log('addToCart');

      const gameToAdd = this.getGameID(itemID);

      if (gameToAdd) {
        this.items++,
        this.cart.push(gameToAdd);

        console.log('Updated Cart:', this.cart,this.items);
      }
    },

    deleteFromCart(index) {
        console.log('deleteFromCart');
        this.cart.splice(index, 1);
        console.log('Updated Cart:', this.cart);

        if (this.cart.length === 0) {
            this.cart = [];
          }

    },

    
  },
});
