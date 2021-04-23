import express from "express";

import "./database";

const app = express();

/**
 * Rotas
 * GET=Buscas
 * POST=Criar
 * PUT=Alterar
 * DELETE=Deletar
 * PATCH= Alterar uma informação específica 
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05",
  })
});

app.post("/users", (request, response) => {
  return response.json({ message: "Usuario salvo com sucesso!" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));