# API REST Node + Express

Uma API REST simples construída com **Node.js** e **Express** para gerenciar dados de usuários fictícios.  
O projeto demonstra os principais métodos HTTP (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) e manipulação de JSON.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JSON para troca de dados

---

## 📁 Estrutura do Projeto

api-rest-node-express/
├─ api.js              # Arquivo principal da API
├─ package.json        # Dependências e scripts do projeto
└─ package-lock.json   # Controle de versões das dependências

---

## ⚡ Instalação

1. Clone o repositório:

git clone https://github.com/LeandroMCarv/api-rest-node-express.git

2. Acesse a pasta do projeto:

cd api-rest-node-express

3. Instale as dependências:

npm install

---

## 🚀 Rodando a API

node api.js

O servidor vai iniciar na porta `5000`.  
A mensagem no console será:

O servidor está rodando...

---

## 📌 Endpoints

### GET `/`

- **Descrição:** Testa se a API está funcionando.
- **Resposta:**

"API em funcionamento!"

---

### GET `/json`

- **Descrição:** Retorna todos os usuários cadastrados.
- **Resposta:**

[
  { "id": 1, "name": "Leandro", "company": "Contabilize" },
  { "id": 2, "name": "Dudu", "company": "MW Informatica" }
]

---

### POST `/json`

- **Descrição:** Adiciona um novo usuário.
- **Body (JSON):**

{
  "id": 3,
  "name": "Maria",
  "company": "Tech Corp"
}

- **Resposta:**

{
  "message": "Item adicionado com sucesso!",
  "data": {
    "id": 3,
    "name": "Maria",
    "company": "Tech Corp"
  }
}

---

### PUT `/json/:id`

- **Descrição:** Atualiza **todo o objeto** de um usuário pelo índice no array.
- **Body (JSON):** Deve conter todos os campos.

{
  "id": 2,
  "name": "Dudu",
  "company": "MW Soluções"
}

- **Resposta:**

{
  "message": "Item atualizado!",
  "data": {
    "id": 2,
    "name": "Dudu",
    "company": "MW Soluções"
  }
}

---

### PATCH `/json/:id`

- **Descrição:** Atualiza parcialmente um usuário pelo índice.
- **Body (JSON):** Somente os campos que deseja alterar.

{
  "company": "MW Global"
}

- **Resposta:**

{
  "message": "Item atualizado!"
}

---

### PATCH `/json/:name`

- **Descrição:** Atualiza parcialmente um usuário **pelo nome**.
- **Body (JSON):**

{
  "age": 26
}

- **Resposta:**

{
  "message": "Usuario parcialmente atualizado!",
  "data": {
    "name": "Ana",
    "company": "TechCorp",
    "age": 26
  }
}

---

### DELETE `/json/:id`

- **Descrição:** Remove um usuário pelo índice.
- **Resposta:**

{
  "message": "Item removido!"
}

---

## 📝 Observações

- A API **não possui banco de dados**; os dados são mantidos apenas na memória (`arrResponse`).  
- Para testes, é recomendado usar **Postman**, **Insomnia** ou `curl`.  
- IDs e nomes devem ser únicos para evitar conflitos na manipulação.

---

## 💡 Contribuição

Fique à vontade para contribuir com melhorias, correções ou sugestões!  
Abra uma issue ou envie um pull request.

---

## 📌 Licença

Este projeto foi criado para estudos e aprendizado.
Você pode usar, modificar e testar à vontade. 🚀
