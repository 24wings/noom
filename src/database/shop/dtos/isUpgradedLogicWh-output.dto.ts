import { CommonOutput } from 'src/shared/dtos/common-output.dto';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';

@ApiExtraModels()
export class IsUpgradedLogicWhResult {
  @ApiProperty({ description: '是否升级' })
  is_lg_upgraded: boolean;
}

@ApiExtraModels()
export class IsUpgradedLogicWhOutput extends ShopCommonOutput {
  @ApiProperty({ description: '结果' })
  result: IsUpgradedLogicWhResult;
}
