import { Module } from "@nestjs/common";
import { CacheController } from "./cache.controller";
import { LogController } from "./log.controller";

@Module({
  controllers: [CacheController, LogController]
})
export class AppCacheModule {

}