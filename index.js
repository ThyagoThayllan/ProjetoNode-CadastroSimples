const express = require("express");
const app = express();
const port = 5000;

const path = require("path");
const basePath = path.join(__dirname, "templates");

const routes = require("./routes");

//  Arquivos Estáticos
app.use(express.static("public"));

//  Ler BODY da REQUISIÇÃO
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//  Rotas
app.use(routes);

//  Redirecionamento para PÁGINA 404
app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
