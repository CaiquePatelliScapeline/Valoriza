import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")//faz referencia a tabela no banco de dados
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    admin: boolean;
    
    @Exclude() //Remove o campo das listagens usando a biblioteca class-transformer
    @Column()
    password: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {User};