import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { WebsiteRuleService } from '../services/website-rule.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { WebsiteRule } from '../entitys/website-rule.entity';
import { CommonOutput } from 'src/shared/dtos/common-output.dto';

@Controller('api/sms/website-rule')
export class WebsiteRuleController {
  constructor(private websiteRuleService: WebsiteRuleService) {}
  @Get('getAll')
  async getAll() {
    let rules = await this.websiteRuleService.findAll();
    return rules;
  }

  @ApiBody({ type: WebsiteRule })
  @ApiResponse({ status: 200, type: CommonOutput })
  @Post('add')
  async add(@Body() websiteRule: WebsiteRule) {
    let rule = await this.websiteRuleService.add(websiteRule);
    return new CommonOutput();
  }
  @ApiResponse({ status: 200, type: CommonOutput })
  @ApiBody({ type: WebsiteRule })
  @Post('update')
  async update(@Body() websiteRule: WebsiteRule) {
    await this.websiteRuleService.updateUser(websiteRule);
    return new CommonOutput();
  }

  @Get('remove')
  async remove(@Query('websiteRuleId') websiteRuleId: string) {
    await this.websiteRuleService.remove(websiteRuleId);
    return new CommonOutput();
  }
}
