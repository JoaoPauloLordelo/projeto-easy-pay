<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';


    const props = defineProps<{
        name : string
        type?: "button" | "submit" | "reset"
    }>()

</script>

<template>
    <button :type="type" class="botaoMedio">
        {{ name }}
    </button>
</template>

<style scoped>
    .botaoMedio{
        border: 0;
        padding: 10px;
        color : var(--cor-de-fundo);
        background-color: var(--laranja);
        border-radius: 5px;
        cursor: pointer;
        transition: 0.2s;
        font-weight: 600;
        width: 100%;
    }

    .botaoMedio:hover{
        background-color: var(--laranja-escuro);
        color: var(--cinza);
    }
</style>