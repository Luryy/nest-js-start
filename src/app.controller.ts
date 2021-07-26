import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(@Inject('LOGGER') private readonly appService: AppService) {}

  @Get()
  getHello(): { running: boolean } {
    const isRunning = this.appService.healthCheck();

    return { running: isRunning };
  }
}
