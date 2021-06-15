import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'ajay',
      password: 'Welcome@1',
      database: 'training2',
      autoLoadEntities: true,
      entities: [],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
