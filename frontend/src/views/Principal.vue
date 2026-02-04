<script setup lang="ts">
  import { computed } from 'vue';
import Nbar from '../components/Nbar.vue';
import PerfilPic from '../components/PerfilPic.vue';

import { useRoute } from 'vue-router'

const router = useRoute()

const estaLoginCadastro = computed(() =>{
  return router.path === "/login" ||  router.path === "/cadastro" || router.path === "/resetsenha"
})

</script>

<template>
  <main class="main">
    <Nbar v-if="!estaLoginCadastro"/>
    <router-view class="roteador"/>
    <PerfilPic v-if="!estaLoginCadastro"/>
  </main>
</template>

<style scoped>
  *{
    margin: 0;
  }

  .roteador{
    flex: 1;
    overflow-y: auto;
    padding: 50px;
  }

  .main{
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
</style>

