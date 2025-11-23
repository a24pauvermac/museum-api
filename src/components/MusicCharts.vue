<script setup>

import { ref } from 'vue';
import { musicCharts } from '../service/communicationManager.js';
import ItemCard from '../components/ItemCard.vue'
const query = ref('')

const results = ref([])
const handleSearch = async () => {
  const res = await musicCharts(query.value)
  results.value = res.data.track
}
</script>
<template>
  <h1>Music Charts</h1>
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