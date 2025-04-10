// Aluno: Ricardo Ryu Magalhães Makino

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gay123",
  database: "exp_criativa_trabalho1"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Conectado ao MySQL!");
});
module.exports = connection;
