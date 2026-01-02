<script setup lang="ts">
  import Nbar from '../components/Nbar.vue';
import PerfilPic from '../components/PerfilPic.vue';
</script>

<template>
  <main class="main">
    <Nbar/>
    <router-view class="roteador"/>
    <PerfilPic/>
  </main>
</template>

<style scoped>
  *{
    margin: 0;
  }

  .roteador{
    overflow-y: auto; /* scroll só aqui */
  }

  .main{
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
</style>

