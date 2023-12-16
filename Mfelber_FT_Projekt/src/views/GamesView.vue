<template>
<div >
    <h1 v-if="games" :key="games.id"> {{ games.name}}</h1>   
    </div>

    
    </template>
<script>
import Store from '../data.json'

export default {
    data() {
        return {
            currentListGames: Store.store
        }
    },
    props: {
      slug: { type: String, required: true },

    },
    computed: {
      games() {
        return this.findBySlug(this.slug);
      },  
    },
    methods: {
      findBySlug(slug) {
        return this.currentListGames.find((currentListGames) => currentListGames.slug === slug);
      }
    }
}
</script>