import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if(!authToken){
        return response.status(401).end();
    }

    // Validar se token é valido
    // Formato do token: Bearer token
    const [, token] = authToken.split(" "); //cortar a string do token no espaço
    
    try{
        const {sub} = verify(token, "4f93ac9d10cb751b8c9cdbccb9") as IPayload;

        request.user_id = sub;

        return next();
    }catch(err){
        return response.status(401).end();
    }

    // Recuperar informações do usuário

    
}