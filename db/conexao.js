const moogoose = require('mongoose');

moogoose.connect('mongodb://localhost:27017/estudo')
.then( (result) => {
    console.log('Conexão realizada com sucesso');    
})
.catch((error) => {
    console.log("Erro: Não foi possível realizar a conexão!" + error);    
});



