const https = require('https');

function testUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            resolve(`${url} -> ${res.statusCode}`);
        }).on('error', (e) => {
            resolve(`${url} -> ERROR ${e.message}`);
        });
    });
}

(async () => {
    const urls = [
        'https://github-readme-stats.vercel.app/api?username=parigaur21',
        'https://github-readme-stats.vercel.app/api?username=Pariigaur',
        'https://github-readme-stats.vercel.app/api?username=pariigaur',
        'https://github-readme-stats.vercel.app/api?username=parigaur'
    ];
    for (const url of urls) {
        console.log(await testUrl(url));
    }
})();
