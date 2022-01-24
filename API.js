const https = require('https');



https.get("https://api.kanye.rest/", {}, (response) =>{
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', (_) => {
        console.log(JSON.parse(data));

    });

});
