<script setup lang="ts">
    import type IItem from "../interfaces/iItem"
    const props = defineProps<{
        item : IItem,
        t : boolean
    }>()



</script>

<template>
    <article v-if="t" class="itemMenu">
        <img :src="`public/icons/${item.imagem}`" alt="" id="itemImg">
    </article>

    <article v-else class="itemMenu" @click="item.navegar()">
        <img :src="`public/icons/${item.imagem}`" alt="" id="itemImg">
        <span class="itemName">
            {{ item.nome }}
        </span>
    </article>
</template>


<style scoped>
    .itemMenu{
        display: flex;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 5px;
        height: 1.90em;
        
    }

    .itemMenu:hover{
        background-color: var(--laranja-escuro);
        transition: 0.2s;
    }

    #itemImg{
        width: 30px;
    }

    .itemName{
        margin: auto;
        margin-left: 0;
    }

</style>