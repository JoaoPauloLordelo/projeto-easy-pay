<script setup lang="ts">
import {obterAcoesHome} from "../store/listaAcoesHome";
import SaldoAtual from '@/components/SaldoAtual.vue';
import type IItem from "../interfaces/iItem";
import AcaoHome from "@/components/AcaoHome.vue";
import UltimasTransacoes from "@/components/UltimasTransacoes.vue";
import GraficoSaldo from "@/components/GraficoSaldo.vue";


const nome = "Layanne"

</script>

<template>
    
    <main>
        <h1 class="textoCinza boasVindas">Olá <span class="textoLaranja">{{ nome }}</span></h1>
        <section class="exibirDados">
            <div class="acaoSaldo">
                <SaldoAtual :valor="10030.228"/>
                <AcaoHome />
            </div>
                <GraficoSaldo/>
            
        </section>
        <UltimasTransacoes/>
        
    </main>

</template>

<style scoped>
    .exibirDados{
        display: flex;
        gap: 30px;
        width: 100%;
    }
    .acaoSaldo{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    main{
        padding: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        
    }

    .boasVindas{
        margin: 20px 0px 0px 0px;
    }
</style>
