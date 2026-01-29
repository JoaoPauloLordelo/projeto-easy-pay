<script setup lang="ts">
import { ref } from 'vue';
import InputTexto from './InputTexto.vue';
import BotaoMedio from './BotaoMedio.vue';
import { navegarResetSenha, navegarCadastro, navegarHome } from '@/routes';

const login = ref("")
const senha = ref("")


function exibir(){
    //window.alert(`login: ${login.value}\nsenha: ${senha.value}`)
    navegarHome()
}

</script>

<template>
        <form class="formularioLogin" @submit.prevent="exibir">
            <img src="../assets/images/easy_pay_icon_orange.png" alt="" class="logoImage">
            
            <div class="interacao">
                <InputTexto v-model="login" type="text" placeholder="Digitar Usuário"
                label="Usuario" :txt-digitado="login"/>
                <InputTexto v-model="senha" type="password" placeholder="Digitar Senha"
                label="Senha" :txt-digitado="senha"/>
                
                <BotaoMedio name="Enviar" type="submit"/>
                <div class="cadastroSenha">
                    <p class="funcaoSecundaria" @click="navegarResetSenha()">Esqueceu a senha?</p>
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
        margin-bottom: 0px;
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