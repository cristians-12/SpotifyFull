import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.request';

@Controller('users')
export class UsersController {
  constructor(public readonly userServices: UsersService) {}

  @Get()
  async getUsers(@Query('_id') id?: string, @Query('email') email?: string) {
    return this.userServices.findOne({ email: email, id: id });
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userServices.create(createUserDto);
  }
}
