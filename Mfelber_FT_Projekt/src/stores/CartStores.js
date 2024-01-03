import { defineStore } from 'pinia';
import gameData from '../data.json';

export const useGamesStore = defineStore('gamesStore', {
  state: () => ({
    items: 0,
    order: 0,
    games: gameData.store,
    cart: [],
    orders: [],
    cartTotal: 0
  }),
  getters: {
    getGameID: (state) => (gameId) => {
      const allGames = state.games.flatMap(platform => platform.games);
      return allGames.find((game) => game.gameID === gameId);
    },
    cartItems() {
      return this.cart;
    },
    getNumberOfItems: (state) => {
      return state.items;
    },
    getOrder() {
      return this.orders;
    },
    getCartTotal: (state) => {
      const gamePrices = state.games.flatMap(platform => platform.games.map(game => parseFloat(game.price.replace(' €', ''))));
      return state.cart.reduce((total, item) => total + gamePrices[item.gameID - 1] * item.quantity, 0);
    },
  },
  actions: {
    addToCart(itemID) {
      const gameToAdd = this.getGameID(itemID);

      if (gameToAdd) {
        this.items++;
        this.cart.push({ ...gameToAdd, quantity: 1 });
        console.log('Updated Cart:', this.cart, this.items);
      }
    },

    deleteFromCart(index) {
      this.cart.splice(index, 1);

      if (this.cart.length === 0) {
        this.cart = [];
        this.items = 0;
      }
    },

    createOrder() {
      console.log('Order is created');

      if (this.cart.length > 0) {

        const order = {
          OrderID: Math.floor(Math.random() * 1000000),
          items: [...this.cart],

        };


        this.orders.push(order);
        this.cart = [];
        this.items = 0;
        console.log('Order is created:', order);
      }
    },
    clearOrder(orderIndex) {
      this.orders.splice(orderIndex, 1);

      if (this.orders.length === 0) {
        this.orders = [];
      }
    },
  },
});



