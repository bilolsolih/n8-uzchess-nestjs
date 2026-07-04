import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Request} from "express";
import {Reflector} from "@nestjs/core";
import {RolesKey} from "@core/decorators/roles.decorator";
import {Role} from "@core/enums/role.enum";


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
    ) {
    }

    canActivate(context: ExecutionContext) {
        const req: Request = context.switchToHttp().getRequest();
        const roles: Role[] = this.reflector.getAllAndOverride(RolesKey, [context.getHandler(), context.getClass()]);

        if (!roles)
            return true;

        // @ts-ignore
        return roles.includes(req.user.role);
    }
}