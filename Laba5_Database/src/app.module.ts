import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./Users/user.entity";
import { UsersController } from "./Users/users.controller";
import { UsersModule } from "./Users/users.module";
import { UsersService } from "./Users/users.service";

@Module({
      imports: [
            ConfigModule.forRoot({isGlobal: true}),
            TypeOrmModule.forRootAsync({
                  imports: [ConfigModule],
                  useFactory: (configService: ConfigService) => ({
                        type: "postgres",
                        host: configService.get('DB_HOST'),
                        port: configService.get('DB_PORT'),
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_NAME'),
                        autoLoadEntities: true,
                        synchronize: true, 
                  }),
                  inject: [ConfigService],
            }),
            TypeOrmModule.forFeature([User]),
            UsersModule,
      ],
      controllers: [UsersController], 
      providers: [UsersService],
})
export class AppModule {}