//Iniciar o servidor utilizando o express 
import express from "express";

const app = express();

app.listen(3000, () => console.log("Server is running!")); //inicia o server na porta 3000 -- http://localhost:3000