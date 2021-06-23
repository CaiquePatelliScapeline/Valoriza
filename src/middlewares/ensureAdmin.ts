import { NextFunction, Request, Response } from "express";

export function ensureAdmin(resquest: Request, response: Response, next: NextFunction){
    //verificar se o usuario é um admin
    const admin = false; //Trava o admin do usuario pra facilitar o desenvolvimento

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized!",
    });
}