<script setup lang="ts">
import { ref } from 'vue';
import ItemNv from './ItemNv.vue';
import  { obterItensNv } from '@/store/listaItemNav'
import { navegarHome } from '@/routes';
import type IItem from '@/interfaces/iItem';
import {navegarConfig} from "../routes/index"
    const listItens = obterItensNv()
    const t = ref(true)

    function expand(){
        t.value = false
    }

    function minimize(){
        t.value = true
    }

    const configs = {
        nome : "Configuração",
        imagem : "white_gear.png",
        navegar: navegarConfig
    }

</script>


<template>
        <aside class="navMenu" :class="{navMenu_mini: t}" @mouseenter="expand()" @mouseleave="minimize()">
            <header class="topoMenu">
                <img src="../assets/images/easy_pay_white_only.png" alt="" class="imagemMenuLogo" @click="navegarHome()">
            </header>
            
            <ul class="opMenu">
                <li v-for="item in listItens">
                    <ItemNv :item="item" :t="t"/>
                </li>
            </ul>
            <footer class="fimMenu">
                <ItemNv :item="configs" :t="t"/>
            </footer>
        </aside>
</template>


<style scoped>
    .opMenu{
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        color: var(--branco);
        font-weight: 600;
        gap: 20px;
    }

    .navMenu{
        width: 15em;
        height: 100vh;
        background-color: var(--laranja);
        transition: 0.1s;
        padding: 0px 10px;
    }

    .navMenu_mini{
        width: 5em;
    }

    .imagemMenuLogo{
        margin: 10px;
        width: 60px;
        cursor: pointer;
    }

    .topoMenu{
        margin-top: 10px;
        display: flex;
        padding-bottom: 30px;
    }

    .fimMenu{
        margin-top: 450px;
        color: var(--branco);
        font-weight: 600;
    }


</style>
