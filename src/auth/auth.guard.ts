import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const bearerToken = request.headers.authorization;
    if (!bearerToken) {
      return false;
    }

    const token = bearerToken.split(' ')[1];
    const isVerified = this.jwtService.verify(token, {
      secret: 'secret',
    });
    if (isVerified) {
      return true;
    }
    return false;
  }
}
