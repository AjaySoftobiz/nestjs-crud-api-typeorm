import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //get users
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  //get user by id
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  // update user
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateDto);
  }

  // delete user
  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
