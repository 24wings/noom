import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class UserHomeResult {
  @ApiProperty({ description: '角色' })
  'cq_role': 1;
  @ApiProperty({ description: '证书状态' })
  'cert_status': 0;
  @ApiProperty({ description: '活动数量' })
  'topic_count': 0;
  @ApiProperty({ description: '订单数量' })
  'order_count': 0;
  @ApiProperty({ description: '用户余额' })
  'user_money': 0.0;
  @ApiProperty({ description: '冻结金额' })
  'frozen_money': number;
  @ApiProperty({ description: '参与' })
  'participate_in': number;
  @ApiProperty({ description: '' })
  'unsend_count': 0;
  @ApiProperty({ description: '角色类型' })
  'role': 0;
  @ApiProperty({ description: '字母' })
  'character': 0;
  @ApiProperty({ description: '协议标志' })
  'agreement_flag': 0;
  @ApiProperty({ description: '是否已同步' })
  'is_synced': 0;
}
export class UserHomeOutput extends ShopCommonOutput {
  @ApiProperty({ description: '结果', type: UserHomeResult })
  'row': UserHomeResult;
}
