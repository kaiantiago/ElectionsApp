import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemCandidatos(){
    return getDados('candidato')
}

export function excluiCandidato(id){
    return deletaDados(`candidato/apagar/${id}`)
}

export function adicionaCandidato(candidato){
    return salvaDados(JSON.stringify(candidato), 'candidato/registrar')
}

export function alteraCandidato(candidato){
    return alteraDados(JSON.stringify(candidato), `candidato/atualizar/${candidato.id}`)
}

export function excluiTodosCandidatos(){
    return deletaDados(`candidato/apagarTodos`)
}