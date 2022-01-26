const axios = require('axios').default;

async function getLuke(){
    let getLuke = await axios.get('https://swapi.dev/api/people/10');
    let data = getLuke.data
    console.log(data);
}

getLuke()


// https.get("https://swapi.dev/api/films/6/", {}, (response) =>{
//     let data = '';
//     response.on('data', (chunk) => {
//         data += chunk;
//     });
//     response.on('end', (_) => {
//         console.log(JSON.parse(data));
        

//     });

// });
