import {
  Controller,
  UseInterceptors,
  CacheInterceptor,
  Get,
} from '@nestjs/common';

@Controller('api/sms/page')
@UseInterceptors(CacheInterceptor)
export class PageController {
  static index = 1;
  @Get('openPage')
  async openPage() {
    return ++PageController.index;
  }
}
