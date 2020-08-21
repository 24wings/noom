import { Module } from "@nestjs/common";
import { AuditLogController } from "./controllers/audit-log.controller";

@Module({
  controllers: [AuditLogController]
})
export class AuditLogModule {

}