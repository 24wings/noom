import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { SmsTaskStatus } from './sms-task-status.enum';

@Entity()
export class SmsTask {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createAt: Date = new Date();

  @Column()
  phoneList: string;

  /// 每次循环多少个次
  @Column()
  times: number;
}
