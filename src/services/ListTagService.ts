import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import {classToPlain} from "class-transformer";

class ListTagService{
    async execute(){
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tags = await tagsRepositories.find();

        // Sobrescrever campo nativo 
        // let tags = await tagsRepositories.find();
        // tags = tags.map((tag) => ({...tag, nameCustom: `#${tag.name}`}));

        // Da pra fazer isso usando a biblioteca class-transformer, mas precisa alterar a entidade tambem -- o exemplo ta na entidade Tag
        // return classToPlain(tags);
        
        return tags;
    }
}

export {ListTagService};