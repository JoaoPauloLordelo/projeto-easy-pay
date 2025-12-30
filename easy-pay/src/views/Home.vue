<script setup lang="ts">
import {obterAcoesHome} from "../store/listaAcoesHome";
import SaldoAtual from '@/components/SaldoAtual.vue';
import type IItem from "../interfaces/iItem";
import AcaoHome from "@/components/AcaoHome.vue";
import UltimasTransacoes from "@/components/UltimasTransacoes.vue";


const nome = "Layanne"

</script>

<template>
    <main>
        <h1 class="textoCinza boasVindas">Olá <span class="textoLaranja">{{ nome }}</span></h1>
        <SaldoAtual :valor="10030.228"/>
        <AcaoHome />
        <UltimasTransacoes/>
        
    </main>

</template>

<style scoped>
    main{
        padding: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        
    }

    .boasVindas{
        margin: 20px 0px 0px 0px;
    }
</style>
