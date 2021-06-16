import { IsEmail, IsString, Length } from "class-validator";

export class AuthSignupCredentialDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8,30)
  password: string;

  @IsString()
  @Length(10)
  phone: string;
}