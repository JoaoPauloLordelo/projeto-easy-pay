<script setup lang="ts">
import type ITransacao from '@/interfaces/iTransacao';
import { ref } from 'vue';

    const imagem = ref("gray_download.png");

    function mudarImagem(){
        imagem.value = imagem.value.replace("gray","white")
    }

    function reverterImagem(){
        imagem.value = imagem.value.replace("white", "gray")
    }

    const props = defineProps<{
        transacao : ITransacao
    }>()

</script>

<template>
    <tr>
        <td colspan="7">
            <div class="transacaoLinha">
                <span v-for="value in transacao" class="valor" :key="value">{{value}}</span>
                
                <button class="comprovanteButton" @mouseenter="mudarImagem()" @mouseleave="reverterImagem()">
                    <img :src="`../../public/icons/${imagem}`" alt="" class="imgBaixar valor">
                </button>
            </div>
        </td>
    </tr>
</template>

<style scoped>
    .transacaoLinha{
        display: flex;
        justify-content: space-between;
        background-color: var(--cinza);
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;

    }

    .transacaoLinha:hover{
        box-shadow: 1px 1px 4px gray;

    }

    .valor{
        margin: auto;
    }

    .imgBaixar{
        width: 1.5em;
    }

    .comprovanteButton{
        background-color: var(--cinza-mais-claro);
        border:0;
        border-radius: 4px;
        width: 5em;
        transition: 0.2s;
        cursor: pointer;
    }

    .comprovanteButton:hover{
        padding: 2px 7px;
        background-color: var(--laranja);
        border-color: var(--laranja);
        margin: -1px ;
    }
</style>