<template>
    <header>
        <div>
            <nav id="nav">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink v-for="game in store" :key="game.id"
        :to="{ name: 'game', params: { slug: game.slug } }" exact>
        {{ game.name }}
        </RouterLink>
      
            </nav>
        </div>
    </header>
</template>
<script>
import Store from '../data.json'
export default{
    data() {
        return {
            store: Store.store
        };
    },
}
</script>