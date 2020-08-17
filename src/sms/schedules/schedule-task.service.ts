import { Injectable } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { WorkerOutput } from '../dtos/worker.output';

@Injectable()
export class ScheduleTaskService {
  static workerList: WorkerOutput[] = [];

  @Interval(30000)
  handleCron() {
    console.log('30s');
    console.log(ScheduleTaskService.workerList);
    let loseConnectionWorkers = ScheduleTaskService.workerList.filter(
      worker => worker.lastConnectionTime.getTime() < Date.now() - 30 * 1000,
    );
    loseConnectionWorkers.forEach(w => {
      let i = ScheduleTaskService.workerList.findIndex(t => t.ip == w.ip);
      ScheduleTaskService.workerList.splice(i, 1);
    });
    console.log(ScheduleTaskService.workerList);
  }

  addActiveWorker({ ip }) {}
}
