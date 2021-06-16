import { IsEmail, IsOptional, Length } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    name?:string;

    @IsOptional()
    @IsEmail()
    email?:string

    @IsOptional()
    @Length(8,30)
    password?:string;

    @IsOptional()
    @Length(10)
    phone?:string;

}