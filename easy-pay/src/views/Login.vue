<script setup lang="ts">
import FormLogin from '@/components/FormLogin.vue';
import { ref } from 'vue';
</script>

    

<template>
    <main class="fundoTela">
        <FormLogin/>
    </main>
</template>

<style scoped>
    .fundoTela{
        background-color: var(--laranja);
        overflow-y: hidden;
    }

</style>