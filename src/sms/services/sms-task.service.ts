import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmsTask } from '../entitys/sms-task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SmsTaskService {
  constructor(
    @InjectRepository(SmsTask)
    private smsTaskRepository: Repository<SmsTask>,
  ) {}
}
