import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppDataSource } from "./data-source";
import { UsersService } from './components/users/users.service';
import { UsersController } from './components/users/users.controller';
import { UsersModule } from './components/users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource
    ),
    UsersModule,

  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}

