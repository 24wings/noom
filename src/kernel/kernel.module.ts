import { Module, OnModuleInit } from "@nestjs/common";

@Module({
  imports: []
})
export class KernelModule implements OnModuleInit {
  onModuleInit() {
    console.log('kernel module init');
  }

}