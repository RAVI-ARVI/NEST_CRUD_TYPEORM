import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/typorm/entities/post';
import { Profile } from 'src/typorm/entities/profile';
import { student } from 'src/typorm/entities/student';
import { StudentsController } from './controllers/students/students.controller';

import { StudentsService } from './services/students/students.service';

@Module({
  imports: [TypeOrmModule.forFeature([student, Profile, Post])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
