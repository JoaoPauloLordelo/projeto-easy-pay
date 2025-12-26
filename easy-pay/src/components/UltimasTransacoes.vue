<script setup lang="ts">
    const valid = true
</script>

<template>
    <section class="tableTransacao">
        <table>
            <thead class="headTransacao">
                <tr>
                    <th>ID Transação</th>
                    <th>Valor</th>
                    <th>Responsável</th>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Comprovante</th>
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
    .headTransacao{
        background-color: var(--cinza-mais-claro);  
        display: flex;
        padding: 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .headTransacao > tr{
        display: flex;
        gap: 20px;
    }
    th{
        font-weight: 400;
        font-size: 15px;
    }

    .corpoTransacao{
    }
</style>