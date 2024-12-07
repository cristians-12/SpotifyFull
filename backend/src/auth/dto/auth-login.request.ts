import { IsEmail, IsString } from "class-validator";

export class AuthLoginDto {
  @IsString()
  password: string;
  @IsEmail()
  email: string;
}
