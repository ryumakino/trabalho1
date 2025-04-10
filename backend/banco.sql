CREATE DATABASE exp_criativa_trabalho1;
USE exp_criativa_trabalho1;

CREATE TABLE IF NOT EXISTS people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  yearBirth INT NOT NULL,
  address VARCHAR(255) NOT NULL,
  gender ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
  cpf VARCHAR(14) NOT NULL
);

select * from people;