import { Controller, Get, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { loginGetAllDto } from 'src/modules/common/dtos/login-getAll.dto';
import { ApiTags } from '@nestjs/swagger';
import { SessionService } from 'src/auth/services/session.service';
import { getAllDto } from 'src/modules/common/dtos/getAll.dto';

@ApiTags('admin')
@Controller('AbpUserConfiguration')
export class AbpController {
  constructor(private jwtService: JwtService, private sessionService: SessionService) { }
  @Get('getAll')
  async getAll(@Request() req: any) {
    let user = await this.sessionService.getUserOrNull();

    if (user) {

      return loginGetAllDto;
    }


    return getAllDto;
  }
}
