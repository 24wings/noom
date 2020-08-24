import { Module } from "@nestjs/common";
import { SettingController } from "./setting.controller";
import { ProfileController } from "./profile.controller";

@Module({
  controllers: [SettingController, ProfileController]
})
export class SettingModule {

}