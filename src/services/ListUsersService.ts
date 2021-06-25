import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {classToPlain} from "class-transformer";

class ListUsersService{
    async execute(){
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.find();
        
        return classToPlain(users); // Usa a biblioteca class-transformer pra remover a senha da listagem -- precisa de alteração na entidade
    }
}

export {ListUsersService};