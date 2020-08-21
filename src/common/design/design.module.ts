import { Module } from "@nestjs/common";
import { DesignPageController } from "./controllers/design-page.controller";

@Module({
  controllers: [DesignPageController]
})
export class DesignModule {

}