import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth.credential';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async signUP(authDto: AuthCredentialDto): Promise<void> {
    const { name, email, password, phone } = authDto;

    const user = this.userRepository.create({
      name,
      email,
      password,
      phone,
    });

    await this.userRepository.save(user);
  }
  
}
