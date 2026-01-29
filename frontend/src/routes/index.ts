import router from './routes';

export function navegarHome(){
    return router.push("/home")
}

export function navegarPagamentos(){
    return router.push("/pagamentos")
}

export function navegarPix(){
    return router.push("/pix")
}

export function navegarEmprestimos(){
    return router.push("/emprestimos")
}

export function navegarCartoes(){
    return router.push("/cartoes")
}

export function navegarConfig(){
    return router.push("/config")
}

export function navegarInvestimentos(){
    return router.push("/investimentos")
}

export function navegarLogin(){
    return router.push("/login")
}

export function navegarCadastro(){
    return router.push("/cadastro")
}

export function navegarResetSenha(){
    return router.push("/resetsenha")
}