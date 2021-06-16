import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignupCredentialDto } from './dto/auth-signup.credential';
import { AuthSigninCredentialDto } from './dto/auth.signin.credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authDto: AuthSignupCredentialDto) {
    return this.authService.signUP(authDto);
  }

  @Post('/signin')
  signIn(@Body() signinDto: AuthSigninCredentialDto) {
    return this.authService.signIn(signinDto);
  }
}
