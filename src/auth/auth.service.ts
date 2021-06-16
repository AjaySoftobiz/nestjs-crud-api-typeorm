import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthSignupCredentialDto } from './dto/auth-signup.credential';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { AuthSigninCredentialDto } from './dto/auth.signin.credential.dto';
import { JwtPayload } from './dto/jwt-payload.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signUP(authDto: AuthSignupCredentialDto): Promise<void> {
    const { name, email, password, phone } = authDto;

    //hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await this.userRepository.save(user);
  }

  // sign in
  async signIn(signInDto: AuthSigninCredentialDto):Promise<{token:string}> {
    const { email, password } = signInDto;

    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const token = await this.jwtService.sign(payload);
      return {token}
    } else {
      throw new UnauthorizedException('Wrong email or password');
    }
  }
}
