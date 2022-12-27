import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { student } from './typorm/entities/student';
import { StudentsModule } from './students/students.module';
import { Profile } from './typorm/entities/profile';
import { Post } from './typorm/entities/post';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      host: 'jss-database.cboucalfpxq0.ap-south-1.rds.amazonaws.com',
      username: 'admin',
      password: 'elonMusk123',
      database: 'ravi',
      entities: [student, Profile, Post],
      synchronize: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
