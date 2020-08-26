import { Role } from '../enums/role.enum';
export interface UserSession {
    user: string;
    roles?: Role[];
}
