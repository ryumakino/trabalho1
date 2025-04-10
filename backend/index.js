const express = require('express');
const cors = require('cors');
const personRoutes = require('./routes/people');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/people', personRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
