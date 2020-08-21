import { Module } from "@nestjs/common";
import { EditionController } from "./controllers/edition.controller";

@Module({
  controllers: [EditionController]
})
export class EditionModule {

}