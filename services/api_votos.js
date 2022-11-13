import { alteraDados, deletaDados, getDados, salvaDados } from "./apiservice";

export function obtemVotos(){
    return getDados('voto');
}

export function excluiVoto(id){
    return deletaDados(`voto/${id}`)
}

export function adicionaVoto(voto){
    return salvaDados(JSON.stringify(voto), 'voto/registrar')
}

export function excluiTodosVotos(){
    return deletaDados(`voto/apagarTodos`)
}

/*export function alteraVoto(voto){
    return alteraDados(JSON.stringify(voto), `voto/atualizar/${voto.id}`)
}*/