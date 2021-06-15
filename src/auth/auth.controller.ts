import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth.credential';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('/signup')
    signUp(@Body() authDto:AuthCredentialDto ){
        return this.authService.signUP(authDto)
    }

}
