
import {default as axios} from 'axios';
import promptPKG from 'prompt-sync';
const prompt = promptPKG();

async function getPerson(id){
    let getPerson = await axios.get(`https://swapi.dev/api/people/${id}`);
    let data = getPerson.data
    return{
        name: data.name,
        height: data.height,
        mass: data.mass
    }
    console.log(data);
}

async function main(){
    let personID = prompt('Type any number from 1-83:');
    console.log(await getPerson(personID));
}

main();

