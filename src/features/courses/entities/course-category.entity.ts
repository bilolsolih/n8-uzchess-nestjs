import {BaseModel} from "@core/base.model";
import {Column, Entity} from "typeorm";

@Entity('courseCategories')
export class CourseCategory extends BaseModel {
    @Column({length: 32})
    title: string;
}