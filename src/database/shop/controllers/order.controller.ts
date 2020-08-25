import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CartInfoOutput } from '../dtos/cart-info-output.dto';
@ApiTags('shop')
@Controller('order')
export class OrderController {
  @ApiOperation({ summary: '购物车信息' })
  @ApiQuery({ name: 'topic_id', type: Number, description: 'topic的主键' })
  @Get('cart_info')
  @ApiResponse({ status: 200, type: CartInfoOutput })
  async cart_info(
    @Query('topic_id') topic_id: number,
  ): Promise<CartInfoOutput> {
    return require('../dtos/cart-info').data;
  }
}
