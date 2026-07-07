import {BaseModel} from "@core/base.model";
import {Column, Entity, OneToMany} from 'typeorm';
import {RolePermission} from './role-permission.entity';
import {UserRole} from './user-role.entity';

@Entity('roles')
export class Role extends BaseModel {
    @Column({length: 64, unique: true})
    title: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @OneToMany(() => RolePermission, (rp) => rp.role)
    rolePermissions: RolePermission[];

    @OneToMany(() => UserRole, (ur) => ur.role)
    userRoles: UserRole[];
}
