import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.request';
import { ResponseType } from 'src/types/response.type';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findOne(query: { id?: string; email?: string }): Promise<ResponseType> {
    const { id, email } = query;

    if (id && Types.ObjectId.isValid(id)) {
      const user = await this.userModel.findById(id);
      if (!user) return { message: 'User not found', data: null };
      return { data: user, message: 'User found' };
    } else if (email) {
      const user = await this.userModel.findOne({ email });
      if (!user) return { message: 'Email not found', data: null };
      return { data: user, message: 'User found' };
    } else {
      return { message: 'User not found', data: null };
    }
  }

  async create(data: CreateUserDto): Promise<any> {
    try {
      const newUser = await this.userModel.create(data);
      return newUser;
    } catch (error) {
      return { message: error.errorResponse.errmsg };
    }
  }
}
