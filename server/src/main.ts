import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AllExceptionFilter } from './all-exception-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const appPort = app.get('ConfigService').get('APP_PORT');
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionFilter(httpAdapter));
  app.setGlobalPrefix('/api');
  app.useGlobalFilters();
  await app.listen(appPort);
}
bootstrap();
