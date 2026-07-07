import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {BaseModel} from "@core/base.model";
import {Role} from './role.entity';
import {Permission} from './permission.entity';

@Entity('rolePermissions')
export class RolePermission extends BaseModel {
    @Column()
    roleId: number;

    @ManyToOne(() => Role, (role) => role.rolePermissions, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'roleId'})
    role: Role;

    @Column()
    permissionId: number;

    @ManyToOne(() => Permission, (permission) => permission.rolePermissions, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'permissionId'})
    permission: Permission;
}
