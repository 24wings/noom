import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
@ApiExtraModels()
export class PickupOutput {
  @ApiProperty({ description: '取货点id', name: 'pickup_id' })
  pickup_id: number;
  @ApiProperty({ description: '取货点名称' })
  pickup_name: string;
  @ApiProperty({ description: '采购id' })
  topic_id: number;
  @ApiProperty({ description: '是否开放' })
  is_open: boolean;
}
@ApiExtraModels()
export class ListPickupResult {
  @ApiProperty({ description: '' })
  'is_pop': boolean;
  @ApiProperty({ description: '采购点列表', isArray: true, type: PickupOutput })
  'list': PickupOutput[];
}

@ApiExtraModels()
export class ListPickupOutput {
  @ApiProperty({ description: '结果' })
  'result': string;
  @ApiProperty({ description: '错误编号' })
  'errcode': number;
  @ApiProperty({ description: '错误信息' })
  'errmsg': string;
  @ApiProperty({ description: '服务时间' })
  'server_time': number;
  @ApiProperty({ description: '结果' })
  'rows': ListPickupResult;
}
