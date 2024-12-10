import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    // console.log(
    //   'Token en la cabecera Authorization:',
    //   request.headers.authorization,
    // );
    return super.canActivate(context);
  }
}
