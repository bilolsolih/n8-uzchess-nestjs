import {Query} from "@nestjs/cqrs";
import {GetAllCategoriesResponse} from "./get-all-categories.response";

export class GetAllCategoriesQuery extends Query<GetAllCategoriesResponse[]> {
    constructor(
        public search?: string,
        public page?: number,
        public size?: number,
    ) {
        super();
    }
}