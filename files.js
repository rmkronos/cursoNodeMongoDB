const { log } = require('console');
const fs = require('fs');
//Ler o arquivo
// fs.readFile('./docs/blog.txt', (err,data)=>{
// if (err){
//     console.log(err);
    
// }
// console.log(data.toString());

// });

//Escrever no arquivo

// fs.writeFile('./docs/blog2.txt', 'Ola! Enfermeira novamente!', () =>{
//     console.log('Foi escrito');    
// });

// if(!fs.existsSync('./assets')){

//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log("Erro: " + err);
//         }else{        
//             console.log('Criado com sucesso!');
//         }
        
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);        
//         }else{
//             console.log('Pasta deletada');
//         }
//     })    
// }


if(fs.existsSync('./docs/delete.txt'))
{
    fs.unlink('./docs/delete.txt', (err) => {
        if(err){
            console.log(err);
            
        }else{
            console.log("Arquivo deletado com sucesso!");            
        }
    })
}