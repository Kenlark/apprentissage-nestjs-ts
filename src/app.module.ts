import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService, AppTest2 } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppTest2],
})
export class AppModule {}
