import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { auth } from 'firebase-admin';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async onUserCreate(user: auth.UserRecord): Promise<void> {
    await this.usersService.onCreated(user);
  }
}