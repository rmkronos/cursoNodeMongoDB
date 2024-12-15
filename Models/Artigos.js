const moogoose = require('mongoose');
const ObjectId = moogoose.Schema.ObjectId;
const Artigo = moogoose.Schema({
    id: ObjectId,
    no_titulo : {
        type: String,
        required: true,
    },
    no_conteudo : {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

//artigos é o nome da tabela 
module.exports = moogoose.model('artigos', Artigo);