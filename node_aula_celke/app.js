
//Conexão com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'celkeone',
  password : 'simba181',
  database : 'celke'
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
});

//Inserir usuário
connection.query('INSERT INTO users(nome, email) VALUES("Sonildo", "pri@celke.com.br")', function(err, result) {
    if (!err) {
        console.log('Usuario cadastrado com sucesso!');
    } else {
        console.log('erro ao cadastrar o usuário');
    }
});


//Atualizar usuário
connection.query('UPDATE users SET nome = "Fulano" WHERE id = 4', function(err, result) {
    if (!err) {
        console.log('Usuario editado com sucesso!');
    } else {
        console.log('erro ao editar o usuario');
    } 
});

//Deletar usuário
connection.query('DELETE FROM users WHERE id = 1', function(err, result) {
    if (!err) {
        console.log('Usuario apagado com sucesso!');
    } else {
        console.log('Erro ao apagar o usario');
    } 
});

