<script setup lang="ts">
import type IItem from '@/interfaces/iItem';
import { obterAcoesHome } from '@/store/listaAcoesHome';
import { ref } from 'vue';

const itens = ref<IItem[]>(obterAcoesHome());

function mudarImagem(item : IItem){
    item.imagem = item.imagem.replace("gray","white")
}

function reverterImagem(item : IItem){
    item.imagem = item.imagem.replace("white", "gray")
}

</script>

<template>
    <section class="grupoAcoes">
        <button class="acaoBotao" v-for="item in itens" :key="item.nome" @mouseenter="mudarImagem(item)" @mouseleave="reverterImagem(item)">
            <img :src="`/icons/acoesHome/${item.imagem}`" alt="" class="imgAcao">
            <span class="nomeAcao">{{ item.nome }}</span>
        </button>
    </section>
</template>

<style scoped>
    .grupoAcoes{
        display:flex;
        flex-direction: row;
        gap: 20px;
    }

    .acaoBotao{
        all: unset;
        display: flex;
        padding: 15px;
        border: 1px solid var(--cinza-mais-claro);
        color: var(--cinza-escuro);
        font-weight: 600;
        border-radius: 10px;
        transition: 0.2s ease-out;
        cursor: pointer;
        gap: 10px;
        width: 100px;
    }

    .acaoBotao:hover{
        border-color: var(--laranja);
        background-color: var(--laranja);
        color: white;
        
    }

    .imgAcao{
        width: 30px;
    }

    .nomeAcao{
        margin: auto 0;
    }

    
</style>