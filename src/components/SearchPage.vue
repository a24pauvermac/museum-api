//importar search api 

<script setup>
import { ref } from 'vue';
import { searchArtist } from '../service/communicationManager.js';
import ItemCard from '../components/ItemCard.vue'
// ref per guardar el text de l'input
const query = ref('')
// ref per guardar els resultats

const results = ref([])
const handleSearch = async () => {
  const res = await searchArtist(query.value)
  results.value = res.data.artists
}
</script>

<template>
  <h1>Search page</h1>
  <input type="text" placeholder="buscant..." v-model="query" />
    <button @click="handleSearch">Search</button>

  <div v-if="results.length">
    <ItemCard 
      v-for="artist in results" 
      :key="artist.idArtist" 
      :item="artist" 
    />
  </div>
</template>

<style scoped>
</style>
