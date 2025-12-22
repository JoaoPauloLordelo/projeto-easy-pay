import router from './routes';

export function navegarHome(){
    return router.push("/")
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