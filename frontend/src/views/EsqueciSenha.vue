<script setup lang="ts">
import FormLogin from '@/components/FormLogin.vue';
import FormResetSenha from '@/components/FormResetSenha.vue';
import { ref } from 'vue';
</script>

    

<template>
    <main class="fundoTela">
        <FormResetSenha/>
    </main>
</template>

<style scoped>
    .fundoTela{
        background-color: var(--laranja);
        overflow-y: hidden;
    }

</style>