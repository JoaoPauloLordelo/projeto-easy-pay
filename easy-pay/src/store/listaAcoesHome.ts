import { navegarCartoes } from "../routes";
import type IItem from "../interfaces/iItem";

export function obterAcoesHome(){
    const lista : IItem[] = [
        {
            nome : "Pagar",
            imagem : "asdasd.png",
            navegar : navegarCartoes
        }
    ]

    return lista
}