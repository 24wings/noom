import { Controller, Get, Req, Request } from '@nestjs/common';
import { ScheduleTaskService } from '../schedules/schedule-task.service';
import { HttpUtilService } from 'src/shared/services/http-util.service';
import { WorkerOutput } from '../dtos/worker.output';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';
import { GetTaskOutput } from '../entitys/get-task.output.output';
import { SmsTaskService } from '../services/sms-task.service';

@Controller('api/sms/worker')
export class WorkerController {
  constructor(
    private httpUtilService: HttpUtilService,
    private smsTaskService: SmsTaskService,
  ) {}

  @ApiOperation({ summary: '连接主机' })
  @ApiResponse({ type: WorkerOutput, isArray: true })
  @Get('connect')
  connect(@Req() req: Request) {
    let ip = this.httpUtilService.getClientIP(req);
    let data = ScheduleTaskService.workerList.find(item => item.ip == ip);
    if (data) {
      data.lastConnectionTime = new Date();
    } else {
      let workerOutput = new WorkerOutput();
      workerOutput.ip = ip;
      workerOutput.lastConnectionTime = new Date();
      ScheduleTaskService.workerList.push(workerOutput);
    }

    return ScheduleTaskService.workerList;
  }

  @ApiResponse({ type: WorkerOutput, isArray: true })
  @Get('getAll')
  getAll() {
    return ScheduleTaskService.workerList;
  }
  @Get('getTask')
  async getTask(): Promise<GetTaskOutput> {
    // await this.smsTaskService.
    let result = new GetTaskOutput();
    result.phoneList;
    return null;
  }
}
