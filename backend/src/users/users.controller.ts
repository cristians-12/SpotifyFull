import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(public readonly userServices: UserServices){}

    @Get

    async GetUsers(){
        return this.
    }


}
