import type { Ref } from 'vue';    
    
export type campoPossivel = "senha" | "cpf" | "email" | "data"
    
const validacoes = {
        "senha": validarSenha,
        "cpf":   validarCpf,
        "email": validarEmail,
        "data":  validarData
       ,

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
    return ""
}

function validarCpf(valor: string){
    if(valor.length < 11){
        return "AVISO: Seu cpf está incompleto!"
    }
    return ""
    //Implementar o algoritimo do cpf
}

function validarEmail(valor: string){
    if (!valor.includes("@")){
        return "AVISO: Seu email está fora do padrão"
    }
    return ""
}

function validarData(valor: string){
    const dataAtual = new Date()
    const dataNascimento = new Date(valor);

    if (dataAtual.getFullYear() - dataNascimento.getFullYear() < 18){
            window.alert("1")
        
            return "AVISO: Você está abaixo da idade mínima, 18 anos"
    }
  if (
    dataAtual.getMonth() < dataNascimento.getMonth() ||
    (
      dataAtual.getMonth() === dataNascimento.getMonth() &&
      dataAtual.getDate() < dataNascimento.getDate() +1
    )) {
    return "AVISO: Você está abaixo da idade mínima, 18 anos"
  }

    return ""

}