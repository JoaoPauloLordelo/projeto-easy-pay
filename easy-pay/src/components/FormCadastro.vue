<script setup lang="ts">
import { ref } from 'vue';
import InputTexto from './InputTexto.vue';
import BotaoMedio from './BotaoMedio.vue';
import { navegarLogin } from '@/routes';

const cpf = ref("")
const senha = ref("")
const nome = ref("")
const email = ref("")
const data = ref("")


// function exibir(){
//     window.alert(`login: ${login.value}\nsenha: ${senha.value}`)
// }

</script>

<template>
        <form class="formularioCadastro" @submit.prevent="">
            <img src="../assets/images/easy_pay_icon_orange.png" alt="" class="logoImage">
            <InputTexto v-model="cpf" type="text" placeholder="Digitar CPF" label="CPF" :txt-digitado="cpf" validacao="cpf"/>
            <InputTexto v-model="nome" type="text" placeholder="Digitar Nome" label="Nome" :txt-digitado="nome"/>
            <InputTexto v-model="email" type="email" placeholder="Digitar Email" label="Email" :txt-digitado="email"/>
            <InputTexto v-model="senha" type="password" placeholder="Digitar Senha" label="Senha" :txt-digitado="senha"/>
            <InputTexto v-model="data" type="date" placeholder="Data de Nascimento" label="Data de Nascimento" :txt-digitado="data"/>
            <BotaoMedio name="Enviar" type="submit"/>
        </form>
</template>

<style scoped>
    .formularioCadastro{
        background-color: var(--cor-de-fundo);
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px;
        padding-top: 30px;
        width: 30%;
        position: absolute;
        right: 0;
        height: 100vh;
        box-sizing: border-box;
        overflow-y: hidden;
    }

    .logoImage{
        width: 50px;
        margin: auto;
        margin-top: 0;
        margin-bottom: 0;
    }

</style>