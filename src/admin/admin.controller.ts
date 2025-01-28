import { Controller, Get, Req } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Request } from 'express';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async index(@Req() req: Request) {
    return this.adminService.all(req);
  }
}
