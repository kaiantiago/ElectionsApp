import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemPartidos(){
    return getDados('partido');
}

export function excluiPartido(id){
    return deletaDados(`partido/apagar/${id}`)
}

export function adicionaPartido(partido){
    return salvaDados(JSON.stringify(partido), 'partido/registrar')
}

export function alteraPartido(partido){
    return alteraDados(JSON.stringify(partido), `partido/atualizar/${partido._id}`)
}

export function excluiTodosPartidos(){
    return deletaDados(`partido/apagarTodos`)
}