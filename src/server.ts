import "reflect-metadata";         //Banco de dados
import express from "express";     //Server
import { router } from "./routes"; //Rotas

import "./database"; //Conexão com o banco de dados

const app = express(); //Iniciar o servidor utilizando o express 

app.use(express.json()); //Define que os route parms serão do tipo .json
app.use(router); //Implementar rotas

app.listen(3000, () => console.log("Server is running!")); //inicia o server na porta 3000 -- http://localhost:3000