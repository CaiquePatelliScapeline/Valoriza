import {getCustomRepository} from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {hash} from "bcryptjs";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService{
    async execute({name, email, admin = false, password}: IUserRequest){
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

        const passwordHash = await hash(password, 8); //criptografa a senha

        const user = usersRepository.create({ //cria o usuário
            name,
            email,
            admin,
            password: passwordHash,
        });

        await usersRepository.save(user); // salva o usuário no banco de dados

        return user;
    }
}

export {CreateUserService};