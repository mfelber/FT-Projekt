<template>
<div >
    <h1 v-if="games" :key="games.id"> {{ games.name}}</h1>   
    </div>

    <div>
      <CurrentPlatform :slug="slug"></CurrentPlatform>
    </div>
    
    </template>
<script>
import CurrentPlatform from '../components/CurrentPlatformGames.vue'
import Store from '../data.json'


export default {
  components: {
CurrentPlatform
},
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
    },
    mounted() {
  console.log(this.slug);
  this.findBySlug();
  },
}
</script>