import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {BaseModel} from "@core/base.model";
import {User} from './user.entity';
import {Permission} from './permission.entity';

@Entity('userPermissions')
export class UserPermission extends BaseModel {
    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.userPermissions, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    user: User;

    @Column()
    permissionId: number;

    @ManyToOne(() => Permission, (permission) => permission.userPermissions, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'permissionId'})
    permission: Permission;

    @Column()
    isAllowed: boolean;
}
