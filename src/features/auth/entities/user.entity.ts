import {BaseModel} from "@core/base.model";
import {Column, Entity, OneToMany} from "typeorm";
import {Role} from "@core/enums/role.enum";
import {UserRole} from "@/features/auth/entities/user-role.entity";
import {UserPermission} from "@/features/auth/entities/user-permission.entity";


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

    @OneToMany(() => UserRole, (ur) => ur.user)
    userRoles: UserRole[];

    @OneToMany(() => UserPermission, (ur) => ur.user)
    userPermissions: UserPermission[];
}