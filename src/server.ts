import "reflect-metadata";         //Banco de dados
import express, { NextFunction, Request, Response } from "express";     //Server
import "express-async-errors";

import { router } from "./routes"; //Rotas
import "./database"; //Conexão com o banco de dados

const app = express(); //Iniciar o servidor utilizando o express 

app.use(express.json()); //Define que os route parms serão do tipo .json
app.use(router); //Implementar rotas

//tratamento de erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){ //Verifica se o erro recebido é uma instancia do tipo Error (throw new Error("");)
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({ //Se o erro não for um erro tratado pela aplicação acima, ele retorna como erro interno do servidor
        status: "error",
        message: "Internal Server Error"
    });
});

app.listen(3000, () => console.log("Server is running!")); //inicia o server na porta 3000 -- http://localhost:3000