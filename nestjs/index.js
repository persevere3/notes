// npm i -g @nestjs/cli
// nest new nestjs-demo

// app.setGlobalPrefix('api');

// nest g module test --no-spec
// nest g controller test --no-spec
// nest g service test --no-spec

// rest client 发送请求插件
// 在项目根目录下创建一个 /RESTClient/demo.http

// database client 数据库管理插件

// npm i --save @nestjs/typeorm typeorm mysql2
// import { TypeOrmModule } from '@nestjs/typeorm'
// 環境變數 path 加 mysql
// imports: [
//   TypeOrmModule.forRoot({
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'Q!w2e3r4',
//     database: 'test',
//     retryDelay: 500,
//     retryAttempts: 0,
//     synchronize: true,
//     autoLoadEntities: true
//   }),
// ],