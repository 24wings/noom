import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class GetAuditLogsInput {
  @ApiProperty()
  StartDate: Date;
  @ApiProperty()
  EndDate: Date;
  @ApiProperty()
  MaxResultCount: number;
  @ApiProperty()
  SkipCount: number;
}