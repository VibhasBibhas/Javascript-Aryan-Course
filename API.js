const axios = require('axios').default;

async function getPerson(id){
    let getPerson = await axios.get('https://swapi.dev/api/people/' + id);
    let data = getPerson.data
    return{
        name: data.name,
        height: data.height,
        mass: data.mass
    }
    console.log(data);
}

async function main(){
    console.log(await getPerson(3))
}

main()



// https.get("https://swapi.dev/api/films/6/", {}, (response) =>{
//     let data = '';
//     response.on('data', (chunk) => {
//         data += chunk;
//     });
//     response.on('end', (_) => {
//         console.log(JSON.parse(data));
        

//     });

// });
