<script setup lang="ts">
import FormCadastro from '@/components/FormCadastro.vue';
import { ref } from 'vue';
</script>

    

<template>
    <main class="fundoTela">
        <FormCadastro/>
    </main>
</template>

<style scoped>
    .fundoTela{
        background-color: var(--laranja);
        overflow-y: hidden;
    }

</style>