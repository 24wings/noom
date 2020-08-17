import { Controller, Post, Body, Req, Get, Request } from '@nestjs/common';
import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { SmsTaskService } from '../services/sms-task.service';
import { WebsiteRule } from '../entitys/website-rule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SmsTask } from '../entitys/sms-task.entity';

@Controller('/api/sms/sms-task')
export class SmsTaskController {
  constructor(
    @InjectRepository(SmsTask)
    private smsTaskRepository: Repository<SmsTask>,
  ) {}

  @ApiOperation({ summary: '创建新任务' })
  @ApiBody({ type: String, isArray: true })
  @Post('createTask')
  async createTask(@Body() phoneList: string[]) {
    let smsTask = this.smsTaskRepository.create();
    smsTask.phoneList = phoneList.join(',');
    await this.smsTaskRepository.insert(smsTask);
    return { ok: true };
  }

  @Get('getTask')
  async getTask(@Req() req: Request) {
    return this.getClientIP(req);
  }

  getClientIP(req) {
    return (
      req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
      req.connection.remoteAddress || // 判断 connection 的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress
    );
  }

  getActiveIpList() {}
}
