<script setup lang="ts">
import { ref } from 'vue';
import InputTexto from './InputTexto.vue';
import BotaoMedio from './BotaoMedio.vue';
import {navegarCadastro,  navegarLogin } from '@/routes';

const senhaAntiga = ref("")
const senhaNova = ref("")
const senhaConfirm = ref("")


function exibir(){
    //window.alert(`login: ${login.value}\nsenha: ${senha.value}`)
    navegarLogin()
}

const erroSenhaNova = ref(false)

function validarSenha(){
    if (senhaNova.value.length < 8){
        return erroSenhaNova.value = true;
    }

    return erroSenhaNova.value = false;
}

</script>

<template>
        <form class="formularioLogin" @submit.prevent="exibir">
            <img src="../assets/images/easy_pay_icon_orange.png" alt="" class="logoImage">
            
            <div class="interacao">
                <InputTexto v-model="senhaAntiga" type="password" placeholder="Digitar Senha Antiga"
                label="Senha Antiga" :txt-digitado="senhaAntiga"/>
                <InputTexto v-model="senhaNova" type="password" placeholder="Digitar Senha Nova"
                label="Senha Nova" :txt-digitado="senhaNova"/>
                <InputTexto v-model="senhaConfirm" type="password" placeholder="Digitar Senha Nova"
                label="Confirmar Senha" :txt-digitado="senhaConfirm"/>
                <BotaoMedio name="Enviar" type="submit"/>
                <div class="cadastroSenha">
                    <p class="funcaoSecundaria" @click="navegarCadastro()">Não tem uma conta? Cadastre-se</p>
                </div>
            </div>
        </form>
</template>

<style scoped>
    .formularioLogin{
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

    .cadastroSenha{
        text-align: center;
        font-size: 12px;
        color: var(--cinza-escuro);
    }
    
    .funcaoSecundaria{
        transition: 0.2s;
        cursor: pointer;
    }

    .funcaoSecundaria:hover{
        text-decoration: underline;
        color: var(--laranja);
    }

    .interacao{
        margin: auto 0 ;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>