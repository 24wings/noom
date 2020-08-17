import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { DistributService } from '../services/distribut.service';
import { Distribut } from '../entitys/distribut.entity';
import { PagedOutput } from 'src/shared/dtos/paged-outout.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('admin')
@Controller('api/distribut')
export class DistrbutController {
  constructor(private distributService: DistributService) {}
  @Get('getAll')
  async getAll(
    @Query('filter') filter: string,
    @Query('skipCount') skipCount: number = 0,
    @Query('maxResultCount') maxResultCount: number = 10,
  ) {
    let data = await this.distributService.filter(
      filter,
      skipCount,
      maxResultCount,
    );
    return new PagedOutput<Distribut>(
      { items: data[0], totalCount: data[1] },
      true,
    );
  }
  @Post('update')
  async update(@Body() body: Distribut) {
    await this.distributService.updateUser(body);
    return { ok: true };
  }
  @ApiBody({
    type: Distribut,
    schema: { example: { entity: 'dis', name: '123' } },
  })
  @Post('insert')
  async insert(@Body() body: Distribut) {
    await this.distributService.add(body);
    return { ok: true };
  }
}
