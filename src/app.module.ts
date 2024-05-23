import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '192.168.1.106',
      port: 3306,
      username: 'harold',
      password: 'admin',
      database: 'test',
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
