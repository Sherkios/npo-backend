import { Controller, Get } from '@nestjs/common';
import { User } from 'src/user/user.model';
import UserService from 'src/user/user.service';

@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    const users: User[] = await this.userService.findAll();
    return users;
  }
}
