import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { UserDto } from '../../common/dto/user.dto';

@Controller('admin/customer')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(@Req() req: Request) {
    return this.usersService.all(req);
  }

  @Post('created')
  async create(@Body() user: UserDto, @Req() req: Request) {
    return this.usersService.created(user, req);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string, @Req() req: Request) {
    return this.usersService.deleted(id, req);
  }
}
