import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.request';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signIn({ email, password }: AuthLoginDto) {
    const user = await this.usersService.findOne({ email });
    if (!user.data || user.data?.password !== password) {
      return { message: 'Invalid credentials', success: false };
    }
    if (password === user.data.password) {
      const { password, ...result } = user.data;
      this.jwtService.sign(result);
      return {
        message: 'Logged in successfully',
        success: true,
        token: this.jwtService.sign(result),
      };
    }
  }
}
