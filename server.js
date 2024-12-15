const http = require('http');
const fs = require('fs');
const _lo = require('lodash');

const server = http.createServer((req, res)=>{
    // console.log('Modo request');
    // console.log(req.url, req.method);

    let path = "./views/";
    switch(req.url){
        case '/':
            path +="index.html";
            res.statusCode = 200;
            break;
        case '/sobre':
            path +="sobre.html";
            res.statusCode = 200;
            break;
        case '/sobre-me':            
            res.statusCode = 301;
            res.setHeader('Location', '/sobre')
            break;
        case '/contato':
            path +="contato.html";
            res.statusCode = 200;
            break;    
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    } 


    res.setHeader('Content-Type', 'text-html');
    fs.readFile( path, (err, data) => {
        if(err){
            console.log(err);     
            res.end();       
        }else{
            //assim
            //res.write(data);            
            // res.end();
            //ou
            res.end(data); 
        }
    })
    
});



server.listen(3010, 'localhost', ()=>{
    console.log('Servidor em execução na porta 3010');
    
});