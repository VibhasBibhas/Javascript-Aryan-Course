const https = require('https');

https.get("https://api.nasa.gov/planetary/apod", {},
response => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', (_) => {
        console.log(JSON.parse(data));

    });
);
