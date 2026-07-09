import {BaseModel} from "@core/base.model";
import {Column, Entity} from "typeorm";

@Entity('difficulties')
export class Difficulty extends BaseModel {
    @Column({length: 32, unique: true})
    title: string;

    @Column({length: 256})
    icon: string;
}