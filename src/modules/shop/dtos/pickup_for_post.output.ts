import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';

@ApiExtraModels()
export class PickupForPostDistribut {
  @ApiProperty({ description: '昵称' })
  nickName: string;
  @ApiProperty({ description: '头像' })
  headPic: string;
}

@ApiExtraModels()
export class PickupItem {
  @ApiProperty({ description: '取货点id' })
  'pickup_id': 156241;
  @ApiProperty({ description: '取货地点名称' })
  'pickup_name': string;
}

@ApiExtraModels()
export class PickupForPostResult {
  @ApiProperty({ description: '分布点信息', type: PickupForPostDistribut })
  'distribute_info': PickupForPostDistribut;
  @ApiProperty({ description: '取货地点列表', type: PickupItem, isArray: true })
  'pickupList': PickupItem[];
  @ApiProperty({ description: '发货时间' })
  'delivery_time': string;
}

@ApiExtraModels()
export class PickForPostOutput extends ShopCommonOutput {
  @ApiProperty({ description: '描述', type: PickupForPostResult })
  rows: PickupForPostResult;
}
