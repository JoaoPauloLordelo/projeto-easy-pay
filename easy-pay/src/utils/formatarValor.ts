export default function formatarValor(valor : Number){
    return valor.toLocaleString("pt-br",{
        style : "currency",
        currency : "BRL"
    })
}