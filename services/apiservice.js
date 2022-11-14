
var urlBack = "http://192.168.0.20:3000/"

export function getDados(urlGet){
        
    const options = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
    body: "",
    };
    console.log(`${urlBack}${urlGet}`);
    return fetch( `${urlBack}${urlGet}`, options);
}

export function salvaDados(objJson, urlPost){
        
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: objJson,
    };
    console.log(objJson);
    return fetch( `${urlBack}${urlPost}`, options);
}

export function deletaDados(urlDelete){
        
    const options = {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    },
    body: "",
    };

    return fetch( `${urlBack}${urlDelete}`, options);
}

export function alteraDados(objJson, urlPost){
        
    const options = {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: objJson,
    };

    return fetch( `${urlBack}${urlPost}`, options);
}