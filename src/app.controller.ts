import { Controller, Get } from "@nestjs/common";
import { AppService, AppTest2 } from "./app.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appService2: AppTest2
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/test")
  getTest(): string {
    return this.appService2.getTest();
  }
}
