import "reflect-metadata";      //Banco de dados
import express from "express";  //Server

import "./database"; //Conexão com o banco de dados

//Iniciar o servidor utilizando o express 
const app = express();

app.listen(3000, () => console.log("Server is running!")); //inicia o server na porta 3000 -- http://localhost:3000