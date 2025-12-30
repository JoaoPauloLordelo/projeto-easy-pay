import {defineStore} from "pinia";
import type ITransacao from "../interfaces/iTransacao";

export const listaTransacoes = defineStore('lista',{
    state : () => ({
        transacoes : [
            {
                id : 1,
                valor: 2000,
                responsavel: "josé",
                tipo : "PIX",
                data : "11/10/2005",
                horario : "14:00"
        },
        {
                id : 2,
                valor: 3000,
                responsavel: "joao",
                tipo : "PIX",
                data : "11/10/2005",
                horario : "14:00"
        },

    ] as ITransacao[]
    }),

    actions : {
        isEmpty(){
            if (this.transacoes.length == 0){
                return true;
            }else{
                return false;
            }
        }
    }
})