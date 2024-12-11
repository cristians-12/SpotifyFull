import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.request';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    console.log(process.env.JWT_SECRET);
  }

  @Post('/login')
  @UseGuards(LocalGuard)
  login(@Body() authPayload: AuthLoginDto) {
    return this.authService.signIn(authPayload);
  }

  @Get('/status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log(req);
  }
}
