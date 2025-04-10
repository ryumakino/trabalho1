# 📦 CRUD Full Stack - React + Node.js + MySQL  

Um sistema completo de gerenciamento de dados com operações CRUD (Create, Read, Update, Delete), desenvolvido com:  
- **Frontend**: React.js  
- **Backend**: Node.js + Express  
- **Banco de Dados**: MySQL  

## 🚀 Começando

### ✅ Pré-requisitos  
- [Node.js](https://nodejs.org/) (v18 ou superior)  
- [MySQL](https://www.mysql.com/) (8.0 ou superior)  
- [MySQL Workbench](https://www.mysql.com/products/workbench/) (recomendado para gerenciamento do banco)  

---

## ⚙️ Configuração do Projeto  

### 1. 🗃️ Banco de Dados (MySQL)  
1. Abra o MySQL Workbench  
2. Conecte-se ao seu servidor MySQL  
3. Vá em `Server` > `Data Import`  
4. Selecione o arquivo `banco.sql` incluído no projeto  
5. Execute para criar o banco de dados e a tabela `people`  

### 2. ⚙️ Backend (API Node.js/Express)  
```bash
# Navegue para a pasta do backend
cd backend

# Instale as dependências
npm install express cors mysql2

# Inicie o servidor
node index.js
```
O servidor estará disponível em `http://localhost:5000`

### 3. 🎨 Frontend (React)  
```bash
# Navegue para a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start
```
O frontend estará disponível em `http://localhost:3000`
