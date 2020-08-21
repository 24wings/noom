import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguageService } from "../../database/repositorys/services/localization/language.service";
import { LanguageController } from "./controllers/language.controller";

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [],
  exports: []
})
export class LocalizationModule {

}