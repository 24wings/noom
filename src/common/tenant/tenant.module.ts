import { Module } from "@nestjs/common";
import { TenantController } from "./controllers/tenant.controller";

@Module({
  imports: [],
  controllers: [TenantController]
})
export class TenantModule {

}