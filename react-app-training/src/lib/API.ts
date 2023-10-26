import config from '../utils/config';

//example
async function getAll(){
    const response = await fetch('/all', {
        headers:{
            Authorization: config.apiKey
        }
    });
    return response.json();
}

async function getOne(id:string){
    const response = await fetch('/all/'+id);
    return response.json();
}

export {getAll,getOne};