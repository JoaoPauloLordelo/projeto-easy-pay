<script setup lang="ts">

</script>

<template>
    <button class="perfilButton">
        <img src="../assets/images/foto-perfil.png" alt="" class="imgPerfil">
    </button>
</template>

<style scoped>
    .perfilButton{
        position: absolute;
        right: 0;
        border-radius: 50%;
        display: inline-block;
        padding: 10px;
        width: 90px;
        height: 90px;
        border: 0;
        background-color: transparent;
    }

    .imgPerfil{
        border: 2px solid;
        border-radius: 50px;
        border-color: var(--laranja);
        padding: 4px;
        width: 50px;
        cursor: pointer;
        transition: 0.2s;
    }

    .imgPerfil:hover{
        padding: 0px;
        border: 5px solid;
        border-color: var(--laranja);

    }

</style>