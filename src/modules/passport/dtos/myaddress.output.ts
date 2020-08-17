import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';

@ApiExtraModels()
export class MyAddressResult {
  @ApiProperty({ description: '收货地址' })
  'address': string;
  @ApiProperty({ description: '收货人' })
  'consignee': string;
  @ApiProperty({ description: '手机号' })
  'mobile': string;
  @ApiProperty({ description: '取货点id' })
  'pickup_pid': number;
  @ApiProperty({ description: '发货目的地名称' })
  'shipping_area_name': string;
  @ApiProperty({ description: '取货点名称' })
  'pickup_cid': number;
  @ApiProperty({ description: '联系人' })
  express_contacter: string;
  @ApiProperty({ description: '联系电话' })
  express_mobile: string;
  @ApiProperty({ description: '省份' })
  'express_province': string;
  @ApiProperty({ description: '市' })
  'express_city': string;
  @ApiProperty({ description: '区' })
  'express_district': string;
  @ApiProperty({ description: '详细地址' })
  'express_address': string;
}

@ApiExtraModels()
export class MyAddressOutput extends ShopCommonOutput {
  @ApiProperty({ description: '结果', type: MyAddressResult })
  'rows': MyAddressResult;
}
