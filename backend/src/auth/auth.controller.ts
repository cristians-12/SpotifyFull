import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.request';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  async login(@Body() authPayload: AuthLoginDto) {
    return this.authService.signIn(authPayload);
    // if (!user) throw new HttpException('Invalid credentials', 401);
  }
}
