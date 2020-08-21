import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";

@ApiExtraModels()
export class GetOrganizationUnitRolesInput {
  @ApiProperty()
  Id: number;
  @ApiProperty()
  MaxResultCount: number;
  @ApiProperty()
  SkipCount: number;

}