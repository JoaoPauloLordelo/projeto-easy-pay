import type IItem from "@/interfaces/iItem"
import {navegarPagamentos, navegarHome, navegarCartoes, navegarEmprestimos, navegarPix} from "../routes/index"

export function obterItensNv() : IItem[] {
    const lista : IItem[] = [
        {
        nome : "Pagamentos",
        imagem : "white_money.png",
        navegar: navegarPagamentos
    },
        {
        nome : "Cartões",
        imagem : "white_card.png",
        navegar: navegarCartoes
    },
        {
        nome : "Emprestimos",
        imagem : "white_empr.png",
        navegar: navegarEmprestimos
    },
    {
        nome : "PIX",
        imagem : "white_pix.png",
        navegar: navegarPix
    }
]
    return lista
    
}