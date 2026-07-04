import {BaseModel} from "@core/base.model";
import {Column, Entity} from "typeorm";
import {Role} from "@core/enums/role.enum";


@Entity('users')
export class User extends BaseModel {
    @Column({length: 64, unique: true})
    username: string;

    @Column({length: 128})
    password: string;

    @Column({length: 64})
    fullName: string;

    @Column({type: "enum", enum: Role, default: Role.User})
    role: Role;
}