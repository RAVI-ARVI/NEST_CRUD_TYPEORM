import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { student } from 'src/typorm/entities/student';
import { StudentsController } from './controllers/students/students.controller';

import { StudentsService } from './services/students/students.service';

@Module({
  imports: [TypeOrmModule.forFeature([student])], //here we pass entities to use at controllers and services
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
