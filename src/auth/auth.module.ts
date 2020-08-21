import { Module, HttpModule, Global } from "@nestjs/common";
import { SessionService } from "./services/session.service";
import { AuthController } from "./controllers/auth.controller";
import { DatabaseModule } from "src/database/database.module";
import { AbpController } from "./controllers/abp.controller";

const SERVICES = [SessionService]
@Global()
@Module({

  controllers: [AuthController, AbpController],
  providers: [...SERVICES],
  exports: [...SERVICES]
})
export class AuthModule {
  constructor() { }

}