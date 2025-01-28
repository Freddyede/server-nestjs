import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200', 'http://localhost:4200/*'],
      exposedHeaders: ['Content-Type', 'Authorization'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      maxAge: Infinity,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      credentials: true,
    },
  });
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().then();
