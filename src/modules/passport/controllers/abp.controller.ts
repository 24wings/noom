import { Controller, Get, Request } from '@nestjs/common';
import { getAllDto } from '../../common/dtos/getAll.dto';
import { JwtService } from '@nestjs/jwt';
import { loginGetAllDto } from 'src/modules/common/dtos/login-getAll.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('AbpUserConfiguration')
export class AbpController {
  constructor(private jwtService: JwtService) {}
  @Get('getAll')
  getAll(@Request() req: any) {
    if (req.headers.authorization) {
      var data = this.jwtService.decode(
        req.headers.authorization.replace(`Bearer `, ''),
        { json: true },
      );
      if (data) {
        return loginGetAllDto;
      }
    }

    return getAllDto;
  }
}
