<script setup lang="ts">
import { computed } from "vue";
import { listaTransacoes } from "../store/listaTransacoesStore";
import RegistroTransacao from "./RegistroTransacao.vue";


    const topicosTable = ["ID Transação","Valor","Responsável","Tipo","Data","Horário","Comprovante"];

    const transacoes = listaTransacoes();

    const valid = computed(() => transacoes.isEmpty());
    
</script>

<template>
    <section class="listaTransacao">
        <table class="tableTransacao">
            <thead class="headTransacao">
                <tr>
                    <th v-for="top in topicosTable">{{ top }}</th>
                </tr>
            </thead>
            <tbody v-if="!valid" class="corpoTransacao">
                <RegistroTransacao v-for="item in transacoes.transacoes" :transacao="item"/>
            </tbody>
            <tbody v-else class="corpoTransacao">
                   <tr>
                        <td :colspan="topicosTable.length" class="semTransacao">
                            Não há Nenhuma transação
                        </td>
                   </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
    .listaTransacao{
        border-radius: 12px;
        border: 1px solid var(--cinza-mais-claro);
        
        padding: 10px;
        background-color: var( --cor-de-fundo);
        /* min-width: 600px;
        max-height: 60vh; */
        
    }

    .semTransacao{
        color: var(--cinza-escuro);
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        padding: 20px;
    }
    .tableTransacao{
        border-spacing: 10px;
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
    }
    .headTransacao{
        background-color: var( --cor-de-fundo);  
    }

    th{
        font-weight: 500;
        font-size: 16px;
        padding: 20px;
        color: var(--cinza-escuro);
        /* border-bottom: 1px solid var(--cinza-claro); */
    }

    .corpoTransacao{
        background-color: var( --cor-de-fundo);
    }
</style>