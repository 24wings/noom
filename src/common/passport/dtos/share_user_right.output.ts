import { ShopCommonOutput } from 'src/shared/dtos/shop-common-output.dto';
import { ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class ShareUserRightOutput extends ShopCommonOutput {}
