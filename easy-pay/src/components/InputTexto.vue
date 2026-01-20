<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import {validar, type campoPossivel} from "../utils/validacoes"
    const txtDigitado = ref("")

    const props = defineProps<{
        placeholder: string
        label?: string 
        type: string
        modelValue : string
        validacao ?: campoPossivel
    }>()

    const emit = defineEmits<{
        (e: 'update:modelValue', value:string) :void
    }>()

    const tipo = ref(props.type);

    const esconder = props.type==="password" ? true : false;
    function revelarSenha(){
        tipo.value = "text"
    }

    function esconderSenha(){
        tipo.value = "password"
    }

    const textoErro = ref("")
    function validarString(){  
        const resultado = validar(txtDigitado.value,props.validacao)
        if (resultado != undefined){
            textoErro.value = resultado;
        }
         
    }


</script>

<template>
    <div>
        <label for="texto" v-if="label" class="labelInput">{{ label }}</label>
        <div class="digitar" :class="{erroIdentificado : textoErro}">
            <input  :type="tipo" id="texto" :placeholder="placeholder" 
            v-model="txtDigitado" @input="emit('update:modelValue', txtDigitado)" @blur="validarString()">
            <button type="button" v-if="esconder" @mousedown="revelarSenha" @mouseup="esconderSenha" @mouseleave="esconderSenha"></button>
        </div>
        <span v-if="textoErro" class="textoDeErro">{{textoErro}}</span>
    </div>
</template>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
    }

    input{
        background-color: unset;
        border: 0;
        width: 100%;
    }

    input:focus{
        outline: none;
        box-shadow: none;
    }

    .labelInput{
        color: var(--cinza-escuro);
        font-weight: 600;
        font-size: 15px;
    }

    .digitar{
        border: 0;
        background-color: var(--cinza-mais-claro);
        border-radius: 2px;
        padding: 15px;
        display: flex;
        flex-direction: row;
    }

    .textoDeErro{
        margin-top: 5px;
        color: red;
        font-size: 12px;
    }

    .erroIdentificado{
        border: 1px solid red;
    }

    
</style>