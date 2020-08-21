import { Controller, Get, Body, Query } from "@nestjs/common";
import { AuditLogService } from "src/database/repositorys/services/audit-log/audit-log.service";
import { GetAuditLogsInput } from "../dtos/input/get-audit-logs.input";
import { CommonOutput } from "src/shared/dtos/common-output.dto";

@Controller('api/services/app/AuditLog')
export class AuditLogController {
  constructor(private auditService: AuditLogService) { }

  @Get('GetAuditLogs')
  async GetAuditLogs(@Query() input: GetAuditLogsInput) {
    const result = await this.auditService.findPageByCreateDateRange(input.StartDate, input.EndDate, input.SkipCount, input.MaxResultCount)

    return Object.assign(new CommonOutput(), {
      result: { items: result[0], totalCount: result[1] }
    });

  }

}