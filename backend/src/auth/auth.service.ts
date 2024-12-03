import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn(email: string, password: string) {
    // const user = await this.usersService.findOne(email);
    // // if (!user || user.password !== pass) {
    // //   throw new UnauthorizedException('Invalid credentials');
    // // }
    // if(!user || user.password !== password){

    // }
    // const { password, ...result } = user; // Excluye el campo 'password' del resultado
    // // TODO: Generate a JWT and return it here
    // return result; // En lugar de devolver el usuario, devolverías un JWT aquí.
  }
}
