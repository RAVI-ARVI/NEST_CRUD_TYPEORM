import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typorm/entities/profile';
import { student } from 'src/typorm/entities/student';
import { StudentsController } from './controllers/students/students.controller';

import { StudentsService } from './services/students/students.service';

@Module({
  imports: [TypeOrmModule.forFeature([student, Profile])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
