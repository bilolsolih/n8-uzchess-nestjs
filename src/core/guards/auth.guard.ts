import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Request} from "express";
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";
import {RolesKey} from "@core/decorators/roles.decorator";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector,
    ) {
    }

    canActivate(context: ExecutionContext) {
        const req: Request = context.switchToHttp().getRequest();
        const roles = this.reflector.getAllAndOverride(RolesKey, [context.getHandler(), context.getClass()]);

        if (!roles)
            return true;

        if (!req.headers.authorization)
            throw new UnauthorizedException();

        const [bearer, token] = req.headers.authorization.split(" ");
        if (!bearer || bearer !== 'Bearer' || !token)
            throw new UnauthorizedException();

        try {
            // @ts-ignore
            req.user = this.jwtService.verify(token);
            return true;
        } catch {
            throw new UnauthorizedException();
        }
    }
}