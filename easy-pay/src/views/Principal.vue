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
    margin-left: 100px;
  }

  .main{
    display: flex;
    flex-direction: row;
  }
</style>
