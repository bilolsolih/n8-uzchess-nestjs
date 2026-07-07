import { SetMetadata } from '@nestjs/common';

export const PermissionKey = 'permission';
export const PermissionDecorator = (permission: string) => SetMetadata(PermissionKey, permission);