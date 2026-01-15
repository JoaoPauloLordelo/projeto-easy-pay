<script setup lang="ts">

    const props = defineProps<{
        image : string
    }>()

</script>


<template>
    <button class="escolher">
        <img :src="image" alt="" class="imgBotao">
    </button>
</template>


<style scoped>

    .escolher{
        all: unset;
        background-color: var(--cor-de-fundo);
        border: 0;
        cursor: pointer;
        width: 30px;
        height: 30px;
        padding: 10px;

    }

    .escolher:hover{
        /* border: 2px solid;
        border-color: var(--laranja); */
        background-color: var(--para-hover);
        border-radius: 20px;
    }

    .imgBotao{
        width: 30px;
    }
</style>