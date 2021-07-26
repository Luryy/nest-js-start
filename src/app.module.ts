import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from '@/app.controller';
import { logger, LoggerMiddlewareDI } from '@/app.logger-middleware';
import { AppService } from '@/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: 'LOGGER', useClass: AppService }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareDI)
      .forRoutes({ path: '/', method: RequestMethod.GET });
    consumer.apply(logger).forRoutes(AppController);
  }
}
