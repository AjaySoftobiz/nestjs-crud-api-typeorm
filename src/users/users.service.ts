import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { UserRepository } from 'src/auth/user.repository';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepo: UserRepository,
  ) {}

  //get all users
  async getUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  // get user by id
  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  //update user
  async updateUser(id: string, updateDto: UpdateUserDto): Promise<User> {
    const { name, email, password, phone } = updateDto;

    const user = await this.getUserById(id);

    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (phone) {
      user.phone = phone;
    }

    await this.userRepo.save(user);
    return user;
  }

  //delete user
  async deleteUser(id: string): Promise<void> {
    // const user = await this.getUserById(id);
    const result = await this.userRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
