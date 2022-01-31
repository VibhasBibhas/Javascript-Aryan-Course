
import {default as axios} from 'axios';

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

async function main(){;
    console.log(await getPerson(14));
}

main();

