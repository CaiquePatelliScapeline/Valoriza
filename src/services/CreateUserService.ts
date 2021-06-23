import {getCustomRepository} from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService{
    async execute({name, email, admin}: IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){ //verifica se o email está preenchido
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){ //verifica se o usuario já existe
            throw new Error("User already exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export {CreateUserService};