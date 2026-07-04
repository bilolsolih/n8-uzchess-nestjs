import {SetMetadata} from "@nestjs/common";
import {Role} from "@core/enums/role.enum";

export const RolesKey = "roles";
export const Roles = (...roles: Role[]) => SetMetadata(RolesKey, roles);