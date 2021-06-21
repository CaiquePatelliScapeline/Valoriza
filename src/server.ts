//Iniciar o servidor utilizando o express 
import express from "express";

const app = express();

/** Metodos HTTP
 * GET      => Buscar uma informação
 * POST     => Inserir (Criar) uma informação
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação especifica
 */

//Rotas
app.get("/test", (request, response) => {
    //Request  => Entrando
    //Response => Saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Teste post");
});

app.listen(3000, () => console.log("Server is running!")); //inicia o server na porta 3000 -- http://localhost:3000