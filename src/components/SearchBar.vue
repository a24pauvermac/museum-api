<script setup>
const emit = defineEmits(["search"]);
const query = defineModel();
</script>

<template>
  <div class="search-bar">
    <input type="text" placeholder="buscant..." v-model="query" />
    <button @click="emit('search')">Search</button>
  </div>
</template>

<style scoped>
</style>
