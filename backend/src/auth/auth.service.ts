import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.request';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signIn({ email, password }: AuthLoginDto) {
    // return password;
    const user = await this.usersService.findOne({ email });
    if (!user.data || user.data?.password !== password) {
      // throw new UnauthorizedException('Invalid credentials');
      return { message: 'Invalid credentials', success: false };
    }
    if (password === user.data.password) {
      const { password, ...result } = user.data;
      this.jwtService.sign(result);
      console.log({
        message: 'Logged in successfully',
        success: true,
        token: this.jwtService.sign(result),
      });
    }
  }
}
