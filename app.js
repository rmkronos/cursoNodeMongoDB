const express =  require('express');
const app = express();
const morgan = require('morgan')
require('./db/conexao');

app.use(express());
app.use(express.json());
// app setando as views;
app.set('view engine', 'ejs');

//middleware e uso de arquivos staticos
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
const Artigos = require('./Models/Artigos');

// app.use((req, res, next) => {
//     console.log('new request mad:');
//     console.log('host:' , req.hostname);
//     console.log('path:' , req.path);
//     console.log('method:' , + req.method);
//     next();
// });

app.get('/', (req, res) => {
    // res.send('<h1>Ola! Enfermeira!!!</h1>');
    // res.sendFile('./views/index.html', {root:__dirname});
    res.render('layout',{page:'index.ejs', title: "Home"});
});


app.get('/contato',  (req, res) => {
    // res.send('<h1>Ola! Enfermeira!!!</h1>');
    // res.sendFile('./views/contato.html', {root:__dirname});
    res.render('layout', {page: "contato.ejs", title: "Contato"});
});

app.get('/sobre', (req, res) => {
    // res.send('<h1>Ola! Enfermeira!!!</h1>');
    // res.sendFile('./views/sobre.html', {root:__dirname});
    res.render('layout', {page: "sobre.ejs", title: "Sobre"});
});


app.get('/sobre-me', (req, res) => {
    // res.send('<h1>Ola! Enfermeira!!!</h1>');
   //return res.redirect('/sobre');
   res.render('layout', {page: "sobre.ejs", title: "Sobre"});
});


app.get('/blogs/create', (req, res) => {
    // res.send('<h1>Ola! Enfermeira!!!</h1>');
   //return res.redirect('/sobre');
   res.render('layout', {page: "blogcreate.ejs", title: "Crete Blog"});
});

app.use((req, res) =>{
    res.status(404).render('404', {title: "Erro"});
});

app.listen(3010,()=>{
    console.log("Servidor em execução!");
    
});