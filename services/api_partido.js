import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemPartidos(){
    return getDados('partido');
}

export function excluiPartido(id){
    deletaDados(`partido/${id}`)
}

export function adicionaPartido(partido){
    salvaDados(JSON.stringify(partido), 'partido/registrar')
}

export function alteraPartido(partido){
    alteraDados(JSON.stringify(partido), `partido/atualizar/${partido.id}`)
}