import type IItem from "../interfaces/iItem";
import {navegarPagamentos, navegarHome, navegarCartoes, navegarEmprestimos, navegarPix, navegarInvestimentos} from "../routes/index"

export function obterItensNv() : IItem[] {
    const lista : IItem[] = [
        {
        nome : "Home",
        imagem : "white_house.png",
        navegar: navegarHome
    },
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
        nome : "Investimentos",
        imagem : "white_graph.png",
        navegar : navegarInvestimentos
    }
]
    return lista
    
}