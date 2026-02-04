<script lang="ts" setup>
import { ref } from 'vue';
import InputTexto from './InputTexto.vue';

    const pesquisar = ref("")

</script>

<template>
    <InputTexto placeholder="Pesquisar Pagamento" type="text" v-model="pesquisar" :txt-digitado="pesquisar"/>
</template>


<style scoped></style>