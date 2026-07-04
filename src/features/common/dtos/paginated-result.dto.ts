import {Type as NestType} from '@nestjs/common';
import {ApiProperty} from "@nestjs/swagger";
import {Expose} from "class-transformer";

export class PaginatedResult<T> {
    @ApiProperty()
    @Expose()
    totalCount: number;

    @ApiProperty()
    @Expose()
    totalPages: number;

    @ApiProperty()
    @Expose()
    currentPage: number;

    @ApiProperty()
    @Expose()
    hasNext: boolean;

    @ApiProperty()
    @Expose()
    hasPrevious: boolean;

    @ApiProperty()
    @Expose()
    data: T[]
}

export function PaginatedResultDto<T>(Dto: NestType<T>) {
    class PaginatedResult {
        @ApiProperty()
        @Expose()
        totalCount: number;
        @ApiProperty()
        @Expose()
        totalPages: number;
        @ApiProperty()
        @Expose()
        currentPage: number;
        @ApiProperty()
        @Expose()
        hasNext: boolean;
        @ApiProperty()
        @Expose()
        hasPrevious: boolean;
        @ApiProperty({type: [Dto]})
        @Expose()
        data: T[]
    }

    return PaginatedResult;
}