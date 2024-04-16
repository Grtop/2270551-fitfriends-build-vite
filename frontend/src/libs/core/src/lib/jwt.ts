import { IUser, ITokenPayload } from '../../../types/src/index';

export function createJWTPayload(user: IUser): ITokenPayload {
  return {
    sub: user.userId,
    email: user.email,
    role: user.role,
    name: user.name,
  };
}
