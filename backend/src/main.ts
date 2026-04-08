import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Zyne POS API')
    .setDescription(
      '**Zyne POS** is a high-performance Point of Sale (POS) application designed for retail and service environments. It features a modern, responsive user interface and a robust backend to handle core functionalities like sales, user management, and inventory.',
    )
    .setVersion('1.0')
    .addBearerAuth() // This is for JWT
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.log(
      '************************************************************',
      'Bootstrap',
    );
    Logger.log(
      '*           Database connected successfully            *',
      'Bootstrap',
    );
    Logger.log(
      `*  Application is running on: http://localhost:${port}     *`,
      'Bootstrap',
    );
    Logger.log(
      `*  API docs available at: http://localhost:${port}/api   *`,
      'Bootstrap',
    );
    Logger.log(
      '************************************************************',
      'Bootstrap',
    );
  });
}

bootstrap().catch((err) => console.error(err));
