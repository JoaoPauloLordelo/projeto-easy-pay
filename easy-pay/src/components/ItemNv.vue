<script setup lang="ts">
    import type IItem from "../interfaces/iItem"
    const props = defineProps<{
        item : IItem,
        t : boolean
    }>()



</script>

<template>
    <article v-if="t" class="itemMenu">
        <img :src="`public/icons/${item.imagem}`" alt="" class="itemImg">
    </article>

    <article v-else class="itemMenu" @click="item.navegar()">
        <img :src="`public/icons/${item.imagem}`" alt="" class="itemImg">
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
    }

    .itemImg{
        width: 30px;
        margin-left: 25%;
    }

    .itemName{
        margin: auto;
        margin-left: 0;
    }

</style>