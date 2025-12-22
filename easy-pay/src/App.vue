<script setup lang="ts">
  import Nbar from './components/Nbar.vue';
</script>

<template>
  <main class="main">
    <Nbar/>
    <router-view/>
  </main>
</template>

<style scoped>
  *{
    margin: 0;
  }

  .main{
    display: flex;
    flex-direction: row;
  }
</style>
