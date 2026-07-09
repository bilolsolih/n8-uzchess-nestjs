import { SetMetadata } from '@nestjs/common';

export const RequiresKey = 'requires';
export const Requires = (permission: string) => SetMetadata(RequiresKey, permission);