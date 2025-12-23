<script setup lang="ts">
import SaldoAtual from '@/components/SaldoAtual.vue';

</script>

<template>
    <main>
        <h1 class="textoCinza">Olá <span class="textoLaranja">Usuário</span></h1>
        <SaldoAtual :valor="1000.228"/>
    </main>

</template>

<style scoped>
    main{
        padding: 50px;
        width: 100%;
    }
</style>
