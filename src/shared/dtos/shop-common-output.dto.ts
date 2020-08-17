import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class ShopCommonOutput {
  @ApiProperty({ description: '错误编码', type: Number })
  'errcode': number;
  @ApiProperty({ description: '错误消息' })
  'errmsg': string;
  @ApiProperty({ description: '服务时间' })
  'server_time': number;
}
