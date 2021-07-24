import { NestFactory } from '@nestjs/core';
import { loggerGlobal } from './app.logger-middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);
  await app.listen(3000);
}
bootstrap();
