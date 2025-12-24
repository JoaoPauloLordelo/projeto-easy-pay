<script setup lang="ts">
import type IItem from '@/interfaces/iItem';



const props = defineProps<{
    item : IItem
}>()
</script>

<template>
    <section class="grupoAcoes">
        <button class="acaoBotao">
            <img src="" alt="">
            <span>{{ item.nome }}</span>
        </button>
    </section>
</template>

<style scoped>
    .grupoAcoes{
        display: flex;
    }

    .acaoBotao{
        all: unset;
        display: flex;
        padding: 15px;
        border: 1px solid var(--cinza-mais-claro);
        color: var(--cinza-escuro);
        font-weight: 600;
        border-radius: 10px;
        transition: 0.1s;
        cursor: pointer;
    }

    .acaoBotao:hover{
        border-color: var(--laranja);
        padding: 14px;
        border: 2px solid;
        color: var(--laranja);
        
    }

    
</style>