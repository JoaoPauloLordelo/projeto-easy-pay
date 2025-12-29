<script setup lang="ts">
    const valid = true;

    const topicosTable = ["ID Transação","Valor","Responsável","Tipo","Data","Horário","Comprovante"];
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
                asdasdasd
            </tbody>
            <tbody v-else class="corpoTransacao">baaaa</tbody>
        </table>
    </section>
</template>

<style scoped>
    .tableTransacao{
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;
    }
    .headTransacao{
        background-color: var(--cinza-mais-claro);  
        border-radius: 10px;
    }

    th{
        font-weight: 400;
        font-size: 15px;
        padding: 20px;
    }

    .corpoTransacao{
    }
</style>