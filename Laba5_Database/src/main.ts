import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './Users/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const usersService = app.get(UsersService)
  const users = await usersService.getAll();
  console.log(users);
  
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();