import { Get, Controller, Query } from '@nestjs/common';
import { PagedOutput } from 'src/shared/dtos/paged-outout.dto';
import { User } from 'src/modules/passport/entitys/user.entity';
import { UsersService } from 'src/shared/services/users.services';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('admin')
@ApiBearerAuth()
@Controller('api/services/app/User')
export class AppUserController {
  constructor(private userServices: UsersService) {}
  @ApiOperation({ summary: '获取所有用户' })
  @Get('GetUsers')
  async GetUsers(
    @Query('Filter') Filter: string,
    @Query('MaxResultCount') MaxResultCount = 10,
    @Query('SkipCount') SkipCount = 0,
  ) {
    let users = await this.userServices.filter(
      Filter,
      SkipCount,
      MaxResultCount,
    );
    users[0].forEach(user => (user.roles = []));
    return new PagedOutput<User>(
      { items: users[0], totalCount: users[1] },
      true,
    );
  }
}
