<template>
  <h1>Your Shopping Cart</h1>

  <div v-if="numberOfItems === 0">Your cart is empty.</div>

  <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
    <img :src="'/images/' + item.image" :alt="item.name" class="cart-item-image">
    <div class="cart-item-detail">
      <div class="cart-item-header">
        <h3>{{ item.name }}</h3>
      </div>
      <div class="price">
        <h3>{{ item.price }}</h3>

      </div>
      <div class="cart-item-footer">
        <v-snackbar :timeout="3000" color="success" variant="tonal" class="remove-snackbar">
          <template v-slot:activator="{ props }">
            <v-btn @click="cart.deleteFromCart(index)" color="red" variant="tonal" class="remove-btn" v-bind="props">
              <v-icon>mdi-trash-can-outline</v-icon>REMOVE</v-btn>

          </template>
          <strong>The game has been successfully removed from your shopping cart.</strong>.
        </v-snackbar>
      </div>
    </div>

  </div>
  <div v-if="numberOfItems !== 0" class="cart-button-buy">

    <v-snackbar :timeout="3000" color="success" variant="tonal" class="remove-snackbar">
      <template v-slot:activator="{ props }">
        <v-btn @click="cart.createOrder()" color="green" variant="tonal" class="remove-btn" v-bind="props">
          BUY</v-btn>
      </template>
      <strong>Your order has been sent and added to your orders.</strong>.
    </v-snackbar>

  </div>

  <div v-if="numberOfItems !== 0">
    <h3>Celkova cena</h3>
    <div class="price">
      <h3>{{ cartTotal }} €</h3>

    </div>
  </div>
</template>
  
<script>
import { useGamesStore } from '../stores/CartStores';

export default {
  data() {
    return {
      cart: useGamesStore(),
    };
  },
  computed: {
    numberOfItems() {
      return useGamesStore().getNumberOfItems;
    },
    cartItems() {
      return useGamesStore().cartItems;
    },
    cartTotal() {
      return useGamesStore().getCartTotal;
    }

  },


};
</script>
  
<style>
.cart-button-buy {
  display: flex;
  justify-content: flex-end;

}

.cart-button-buy button {
  border-style: solid;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;

}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 75px;
  height: 100px;
  margin-right: 10px;
}

.cart-item-detail {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.cart-item-header {
  display: flex;
  align-items: center;

}

.remove-snackbar {
  margin-left: 10px;
}

.remove-btn {
  margin-right: 10px;
}

.price {
  text-align: left 100px;
}
</style>
  