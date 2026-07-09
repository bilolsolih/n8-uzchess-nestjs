import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsOptional} from "class-validator";

export class PaginationFilters {
    @IsInt()
    @IsOptional()
    @ApiProperty({required: false})
    page?: number;


    @IsInt()
    @IsOptional()
    @ApiProperty({required: false})
    size?: number;
}