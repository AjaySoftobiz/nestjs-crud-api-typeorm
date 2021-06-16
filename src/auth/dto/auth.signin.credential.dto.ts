import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthSigninCredentialDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}