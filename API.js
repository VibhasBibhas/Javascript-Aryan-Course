const https = require('https');



https.get("https://api.kanye.rest/", {},
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', (_) => {
        console.log(JSON.parse(data));

    });
);
