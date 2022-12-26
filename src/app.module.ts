import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { student } from './typorm/entities/student';
import { StudentsModule } from './students/students.module';
import { Profile } from './typorm/entities/profile';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'jss-database.cboucalfpxq0.ap-south-1.rds.amazonaws.com',
      username: 'admin',
      password: 'elonMusk123',
      database: 'ravi',
      entities: [student, Profile],
      synchronize: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
