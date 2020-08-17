import { Controller, Query, Get } from '@nestjs/common';
import { ApiQuery, ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ShareUserRightOutput } from '../dtos/share_user_right.output';

@ApiTags('shop')
@Controller('commission')
export class CommissionController {
  @ApiOperation({
    summary: '获取用户分享人信息',
    description: '获取用户分享人信息',
  })
  @Get(`share_user_rights`)
  @ApiQuery({ name: 'share_user_id' })
  @ApiQuery({ name: 'user_id' })
  @ApiResponse({ status: 200, type: ShareUserRightOutput })
  async share_user_rights(
    @Query('share_user_id') share_user_id: number,
    @Query('user_id') user_id: number,
  ) {
    return null;
  }
}
