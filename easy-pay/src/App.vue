<script setup lang="ts">
  import Nbar from './components/Nbar.vue';
import PerfilPic from './components/PerfilPic.vue';
</script>

<template>
  <main class="main">
    <Nbar/>
    <router-view/>
    <PerfilPic/>
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
