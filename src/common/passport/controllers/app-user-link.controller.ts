import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('admin')
@Controller('api/services/app/UserLink')
export class AppUserLinkController {
  @Get('GetLinkedUsers')
  async UserLink(@Query() MaxResultCount = 10, @Query() SkipCount = 0) {
    return {
      result: { totalCount: 0, items: [] },
      targetUrl: null,
      success: true,
      error: null,
      unAuthorizedRequest: false,
      __abp: true,
    };
  }
}
