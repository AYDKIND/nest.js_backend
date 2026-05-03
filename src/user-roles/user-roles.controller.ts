import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../guards/roles/role.decorator';
import { RolesGuard } from '../guards/roles/roles.guard';
import { Role } from '../guards/roles/roles.enums';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData(){
    return { message: 'Only admin can access'}
  }
  @Get('uaer-data')
  getUserData(){
    return { message: 'Anyone can access'}
  }

}
