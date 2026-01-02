import { navegarCartoes, navegarPix } from "../routes";
import type IItem from "../interfaces/iItem";

export function obterAcoesHome(){
    const lista : IItem[] = [
        {
            nome : "Pagar",
            imagem : "gray_pay.png",
            navegar : navegarCartoes
        },
        {
            nome : "Cofrinho",
            imagem : "gray_pig.png",
            navegar : navegarCartoes
        },
        {
            nome: "PIX",
            imagem: "gray_pix.png",
            navegar : navegarPix
        },
                {
            nome: "Crédito",
            imagem: "gray_pix.png",
            navegar : navegarPix
        }
    ]

    return lista
}