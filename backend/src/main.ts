import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    Logger.log('Database connected successfully', 'Bootstrap');
    Logger.log(`Application is running on: \x1b[32mhttp://localhost:${port}\x1b[0m`, 'Bootstrap');
  });
}
bootstrap();
