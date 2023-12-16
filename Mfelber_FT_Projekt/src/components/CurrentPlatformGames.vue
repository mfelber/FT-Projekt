<template>
    
    <div v-for="games in games.games" :key="games.slug">
        <div>
            <img :src="'/images/' + games.image" :alt="games.name">            
            <button>TO CART</button>
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