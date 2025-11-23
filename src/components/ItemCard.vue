<script setup>
const props = defineProps(['item'])
</script>

<template>
  <div class="item-card">
    <img :src="item.strArtistThumb" alt="Imagen artista" />
    <h2>{{ item.strArtist }}</h2>
  </div>
</template>
