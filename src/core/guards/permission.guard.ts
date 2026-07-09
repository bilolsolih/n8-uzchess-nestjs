import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {RequiresKey} from '../decorators/requires.decorator';
import {Permission} from "@/features/auth/entities/permission.entity";
import {Cache} from "@nestjs/cache-manager";

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly cache: Cache,
    ) {
    }

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const requirements = this.reflector.get(RequiresKey, context.getHandler());
        if (!requirements) {
            return true;
        }

        const [resource, action] = requirements.split(':');

        let userPermissions: any = await this.cache.get(`permissions:${req.user.id}`);

        if (!userPermissions){
            const allowedPermissions = await Permission.findBy({userPermissions: {userId: req.user.id, isAllowed: true}});
            const deniedPermissions = await Permission.findBy({userPermissions: {userId: req.user.id, isAllowed: false}});
            const rolePermissions = await Permission.findBy({
                    rolePermissions: {role: {userRoles: {userId: req.user.id}}},
                },
            );
            userPermissions = [
                ...allowedPermissions.filter(perm => !deniedPermissions.some(denied => denied.id === perm.id)),
                ...rolePermissions.filter(perm => !deniedPermissions.some(denied => denied.id === perm.id)),
            ];
            await this.cache.set(`permissions:${req.user.id}`, userPermissions);
        }


        return userPermissions.some((perm: Permission) => perm.resource === resource && perm.action === action);
    }
}
