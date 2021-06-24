import { getCustomRepository } from "typeorm";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        
        //Verificar se o email existe
        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        //Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        //Gerar token
        const token = sign({
            email: user.email
        }, "4f93ac9d10cb751b8c9cdbccb9", { //essa chave deve ser feita em um MD5 generator
            subject: user.id,
            expiresIn: "1d" //tempo de vida de 1 dia
        }); 

        return token;
    }
}

export {AuthenticateUserService};