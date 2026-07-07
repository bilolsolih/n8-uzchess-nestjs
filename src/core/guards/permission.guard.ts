import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {PermissionKey} from '../decorators/permission.decorator';
import {Permission} from "@/features/auth/entities/permission.entity";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
    ) {
    }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const permissions = this.reflector.get(PermissionKey, context.getHandler());
        if (!permissions) {
            return true;
        }

        const [resource, action] = permissions.split(':');

        const allowedPermissions = await Permission.findBy({userPermissions: {userId: req.user.id, isAllowed: true}});
        const deniedPermissions = await Permission.findBy({userPermissions: {userId: req.user.id, isAllowed: false}});
        const rolePermissions = await Permission.findBy({
                rolePermissions: {role: {userRoles: {userId: req.user.id}}},
            },
        );

        let userPermissions = [
            ...allowedPermissions.filter(perm => !deniedPermissions.some(denied => denied.id === perm.id)),
            ...rolePermissions.filter(perm => !deniedPermissions.some(denied => denied.id === perm.id)),
        ];

        return userPermissions.some((perm: Permission) => perm.resource === resource && perm.action === action);
    }
}
