import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('admin/customer')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(@Req() req: Request) {
    return this.usersService.all(req);
  }
}
