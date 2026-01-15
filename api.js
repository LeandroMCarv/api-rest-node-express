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
    { id: 1, name: "Leandro", company: "Contabilize" },
    { id: 2, name: "Dudu", company: "MW Informatica" },
];

//tratamento do get no endpoint raiz
app.get("/", (req, res) => {
    res.status(200).send("API em funcionamento!");
});

//tratamento do get no get no endpoint /json
app.get("/json", (req, res) => {
    res.status(200).json(arrResponse);
});

//permite usar o json na body da requisição POST
app.use(express.json());

//post serve para criação de novos dados
app.post("/json", (req, res) => {
    const novoItem = req.body;
    if(!novoItem.id ||!novoItem.name || !novoItem.company){
        return res.status(400).json({
            error: "id, name e company são obrigatórios!",
        });
    }

    arrResponse.push(novoItem);
    res.status(201).json({
        message: "Item adicionado com sucesso!",
        data: novoItem,
    });
});

//put serve para atualizações completas
app.put("/json/:id", (req,res) => {
    const { id } = req.params; //dados da url
    const dadosAtualizados = req.body; //dados enviados no corpo da requisição

    if(!arrResponse[id]){
        return res.status(404).json({error: "Item nao encontrado!"});
    }

    arrResponse[id] = dadosAtualizados;

    res.json({
        message: "Item atualizado!",
        data: arrResponse[id],
    });
});

//patch serve para atualizações parciais
app.patch("/json/:id", (req, res) => {
    const {id} = req.params;

    if(!arrResponse(id)) return res.status(404).json({error: "Item não encontrado!"});

    arrResponse[id] = {//atualiza só o que veio e o que não veio mantém o valor antigo
        /*Caso não use a spread(...), valores não enviados no campo da requisição serão perdidos
        Caso ocorra a troca das linhas 70 e 71, os valores enviados na requisição também serão perdidos*/
        ...arrResponse[id],
        ...req.body,
    };

    res.json({
        message: "Item atualizado!"
    });
});

//exemplo de patch com procura por nome ao invés de id
app.patch('/json/:name', (req,res) => {
    const {name} = req.params;

    const item = arrResponse.find(user => user.name ===name);

    if(!item) return res.status(400).json({error: "Item não encontrado ou nome incorreto!"});

    Object.assign(item, req.body);

    res.json({
        message: "Usuario parcialmente atualizado!",
        data: item
    });
});

//delete remove dados
app.delete("/json/:id", (req,res) => {
    const {id} = req.params;

    if(!arrResponse[id]){
        return res.status(404).json({error: "Item não encontrado"});
    }

    arrResponse.splice(id,1);//remove o item encontrado pelo id array.splice(indice,quantidade,item1,item2...)

    res.json({ message: "Item removido!"});
});

//inicia o servidor na porta definida na variavel PORT(5000)
app.listen(PORT, () => {
  console.log("O servidor está rodando...");
});
