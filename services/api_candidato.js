import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemCandidatos(){
    return getDados('candidato');
}

export function excluiCandidato(id){
    deletaDados(`candidato/apagar/${id}`)
}

export function adicionaCandidato(candidato){
    salvaDados(JSON.stringify(candidato), 'candidato/registrar')
}

export function alteraCandidato(candidato){
    alteraDados(JSON.stringify(candidato), `candidato/atualizar/${candidato.id}`)
}