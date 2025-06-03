const sql = require('mssql');

const config = {
    user: 'seu_usuario_sql',
    password: 'sua_senha_sql',
    server: 'localhost',  // ou o IP/hostname
    database: 'fastTrash',
    options: {
        encrypt: false,  // true se for Azure
        trustServerCertificate: true
    }
};

sql.connect(config)
    .then(() => console.log('Conectado ao SQL Server!'))
    .catch(err => console.error('Erro na conexão: ', err));

module.exports = sql;