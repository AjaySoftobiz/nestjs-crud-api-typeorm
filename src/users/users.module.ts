import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserRepository } from 'src/auth/user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([UserRepository])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
