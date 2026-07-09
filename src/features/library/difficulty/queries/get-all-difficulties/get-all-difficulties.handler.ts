import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetAllDifficultiesQuery} from "./get-all-difficulties.query";
import {Difficulty} from "@/features/library/entities/difficulty.entity";

@QueryHandler(GetAllDifficultiesQuery)
export class GetAllDifficultiesHandler implements IQueryHandler<GetAllDifficultiesQuery> {
    async execute(query: GetAllDifficultiesQuery) {
        const difficulties = await Difficulty.find();
        for (let difficulty of difficulties) {
            difficulty.icon = 'http://localhost:8000/' + difficulty.icon;
        }
        return difficulties;
    }
}