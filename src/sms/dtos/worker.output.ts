import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class WorkerOutput {
  @ApiProperty({ description: '客户端ip' })
  ip?: string;
  @ApiProperty({ description: '最后一次连接时间' })
  lastConnectionTime: Date;
}
