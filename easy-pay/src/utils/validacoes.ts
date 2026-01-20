import type { Ref } from 'vue';    
    
export type campoPossivel = "senha" | "cpf" | "email" | "data" | ""
    
const validacoes = {
        "senha": (valor : string) => {
            return validarSenha(valor)
        },
        "cpf": (valor : string) =>{
            return validarCpf(valor)
        },
        "email": (valor : string)=>{
            return validarEmail(valor)
        },
        "data": (valor : string)=>{
            return ""
        },
        "":()=>{
            return ""
        }
    }

export function validar(valor : string, tipo ?: campoPossivel){
    if (tipo != undefined){
        return validacoes[tipo](valor);
    }

}



function validarSenha(valor: string){
    if (valor.length < 8){
        return "AVISO: A senha possui menos que 8 digitos"
    }
}

function validarCpf(valor: string){
    if(valor.length < 11){
        return "AVISO: Seu cpf está incompleto!"
    }
    //Implementar o algoritimo do cpf
}

function validarEmail(valor: string){
    if (!valor.includes("@")){
        return "AVISO: Seu email está fora do padrão"
    }
}

function validarData(valor: string){

}