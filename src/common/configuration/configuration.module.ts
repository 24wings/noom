import { Module } from "@nestjs/common";
import { UserConfigurationController } from "./controllers/user-configuration.controller";
import { LocalizationModule } from "../localization/localization.module";
import { DatabaseModule } from "src/database/database.module";


@Module({
  imports: [LocalizationModule, DatabaseModule],
  controllers: [UserConfigurationController]
})
export class ConfigurationModule {

}