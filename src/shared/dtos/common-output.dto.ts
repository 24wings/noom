import { ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class CommonOutput {
  'targetUrl': string;
  'success': boolean = true;
  'error': boolean = false;
  'unAuthorizedRequest': boolean = true;
  '__abp': true = true;
}
