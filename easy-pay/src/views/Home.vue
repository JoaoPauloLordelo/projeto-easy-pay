<script setup lang="ts">
import {obterAcoesHome} from "../store/listaAcoesHome";
import SaldoAtual from '@/components/SaldoAtual.vue';
import type IItem from "../interfaces/iItem";
import AcaoHome from "@/components/AcaoHome.vue";


const lista : IItem[] = obterAcoesHome();
const nome = "Usuário"

</script>

<template>
    <main>
        <h1 class="textoCinza">Olá <span class="textoLaranja">{{ nome }}</span></h1>
        <SaldoAtual :valor="1000.228"/>
        <ul>
            <li v-for="item in lista">
                <AcaoHome :item="item"/>
            </li>
        </ul>
        
    </main>

</template>

<style scoped>
    main{
        padding: 50px;
        width: 100%;
    }

    ul{
        list-style-type: none;
        padding: 0;
    }
</style>
