import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AllExceptionsFilter } from './utils/exceptions/all-exception.filter';
import { AppConfigService } from './config/app/config.service';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const config = new DocumentBuilder()
    .setTitle('Vote Control - Kraken')
    .setDescription('Documentations for Vote Control - Kraken')
    .setVersion('3.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const appConfig: AppConfigService = app.get(AppConfigService);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  await app.listen(appConfig.port);
}
bootstrap();
