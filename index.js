var http = require('http');
const fs = require('fs');

let cheerio=require('cheerio')

let html = fs.readFileSync('browser.html', 'utf8');



function MYNICESERVICE (request, response) {
   b = cheerio.load(html)
   b('h3').text('Khan sahab!')

   response.write(request.url)
    response.write(b.html())
    response.end();
}




http.createServer(MYNICESERVICE).listen(8111);

