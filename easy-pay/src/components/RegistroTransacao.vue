<script setup lang="ts">
import type ITransacao from '@/interfaces/iTransacao';
import { ref } from 'vue';

    const imagem = ref("gray_download.png");
    const props = defineProps<{
        transacao : ITransacao
    }>()

</script>

<template>
    <tr>
        <td colspan="7">
            <div class="transacaoLinha">
                <span v-for="value in transacao" class="valor">{{value}}</span>
                
                <button class="gerarComprovante">
                    <img :src="`../../public/icons/${imagem}`" alt="" class="imgBaixar">
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
    }

    .valor{
        margin-top
        : auto;
    }

    .imgBaixar{
        width: 20px;
    }
</style>