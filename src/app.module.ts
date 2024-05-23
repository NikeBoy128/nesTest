import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-gym',
      port: 3307,
      username: 'harold',
      password: 'admin',
      database: 'gym',
      entities: [`${__dirname}/users/entities/**/*.entity.{ts,js}`],
      synchronize: false,
    }),

    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
