import { Injectable } from "@nestjs/common";
import { AuditLog } from "../../entitys/audit-log/audit-log.entity";
import { Repository, Between } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuditLogService {
  constructor(@InjectRepository(AuditLog) private auditLogRepository: Repository<AuditLog>) { }

  findPageByCreateDateRange(startDate: Date, endDate: Date, skip = 0, take = 10) {
    return this.auditLogRepository.findAndCount({
      where: {
        executionTime: Between(startDate, endDate)
      },
      skip,
      take
    })
  }

}