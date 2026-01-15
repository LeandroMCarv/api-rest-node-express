/*API = Application Programming Interface
Uma API REST significa Representational State Transfer
Usa os principais métodos HTTP: GET, POST, PUT/PATCH e DELETE
JSON = JavaScript Object Notation
Express = Framework do Node.js para construção de APIs
*/

import express from "express";

const app = express();
const PORT = 5000;
const arrResponse = [
  { name: "Leandro", company: "Contabilize" },
  { name: "Dudu", company: "MW Informatica" },
];

//tratamento do get no endpoint raiz
app.get("/", (req, res) => {
  res.send("API em funcionamento!");
});

//tratamento do get no get no endpoint /json
app.get("/json", (req, res) => {
  res.json(arrResponse);
});

app.listen(PORT, () => {
  console.log("O servidor está rodando...");
});
