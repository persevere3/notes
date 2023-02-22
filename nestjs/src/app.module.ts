import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Q!w2e3r4',
      database: 'test',
      retryDelay: 500,
      retryAttempts: 0,
      synchronize: true,
      autoLoadEntities: true
    }),
    TestModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
