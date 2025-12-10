<script setup lang="ts">
import { ref } from 'vue';

    const listNomes = ["Pagamentos","Minha Conta","Cartões","Emprestimos","PIX"]
    const t = ref(false)

    function minimize(){
        t.value = !t.value
    }

</script>


<template>
    <nav>
        <section class="navMenu" :class="{navMenu_mini: t}">
            <img src="../assets/images/" alt="">
            
            <ul class="opMenu">
                <li v-for="aba in listNomes" @click="minimize()">{{ aba }}</li>
            </ul>
        </section>
    </nav>
</template>


<style scoped>
    .opMenu{
        height: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--branco);
        font-weight: 600;
    }

    .navMenu{
        width: 15%;
        height: 100vh;
        background-color: var(--laranja);
        transition: 0.2s;
    }

    .navMenu_mini{
        width: 5%;
    }


</style>
