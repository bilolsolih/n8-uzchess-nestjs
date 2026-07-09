import {PaginationFilters} from "@/features/common/filters/pagination-filters";
import {Allow} from "class-validator";
import {GetAllDifficultiesQuery} from "./get-all-difficulties.query";

export class GetAllDifficultiesRequest extends PaginationFilters {
    @Allow()
    toQuery = () => new GetAllDifficultiesQuery(this);
}