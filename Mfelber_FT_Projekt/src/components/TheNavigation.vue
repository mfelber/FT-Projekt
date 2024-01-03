<template>
    <header>
        <div>
            <nav id="nav">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink v-for="game in store" :key="game.id" :to="{ name: 'game', params: { slug: game.slug } }" exact>
                    {{ game.name }}
                </RouterLink>
                <RouterLink to="/cart" style="margin-left: auto;">
                    <v-icon>mdi-cart</v-icon>
                    <!-- <Cart></Cart> -->
                </RouterLink>
                <RouterLink to="/orders">Your Orders</RouterLink>

            </nav>
        </div>
    </header>
</template>
<script>
import Store from '../data.json'
import Cart from '../components/Cart.vue'
export default {
    components: {
        Cart
    },
    data() {
        return {
            store: Store.store
        };
    },
}
</script>