import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemVotos(){
    return getDados('voto');
}

export function excluiVoto(id){
    deletaDados(`voto/${id}`)
}

export function adicionaVoto(voto){
    salvaDados(JSON.stringify(voto), 'voto/registrar')
}

/*export function alteraVoto(voto){
    alteraDados(JSON.stringify(voto), `voto/atualizar/${voto.id}`)
}*/