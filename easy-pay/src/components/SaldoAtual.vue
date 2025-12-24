<script setup lang="ts">
import { ref } from 'vue';
import formatarValor from "../utils/formatarValor";

    const props = defineProps<{
        valor : Number
    }>()

    const exibir = ref(true);
    function mostrarSaldo(){
        exibir.value = !exibir.value
    }

</script>

<template>
    <section class="exibeSaldo">
        <div class="quantSaldo">
            <h2 class="tituloSaldo">Saldo Atual</h2>
            <button @click="mostrarSaldo()" :class="{botaoAtivo: !exibir}"></button>
        </div>
            <p class="valor" v-if="exibir">{{formatarValor(valor)}}</p>
            <p class="valorEscondido"  v-else>R$ ****</p>
    </section>
</template>

<style scoped>
    .tituloSaldo{
        color: var(--cinza-escuro);

    }
    .quantSaldo{
        display: flex;
    }
    .botaoAtivo{
        background-color: var(--laranja);
    }

    div > button{
        background-color: var(--cinza-escuro);
        border: 0;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.2s;
        margin: auto 20px;
        position: block;
    }
    .valorEscondido{
        margin: 0 0px;
        font-size: 60px;
        font-weight: 600;
        color: var(--cinza-escuro);
    }
    .exibeSaldo{
        border: 1px solid;
        padding: 10px;
        border-color: var(--cinza-mais-claro);
        border-radius: 10px;
        padding: 20px;
    }

    .valor{
        margin: 0 0px;
        font-size: 60px;
        font-weight: 600;
        color: var(--laranja);
    }
</style>