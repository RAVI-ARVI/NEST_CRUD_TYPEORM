import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { student } from 'src/typorm/entities/student';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(student) private studentRepository: Repository<student>,
  ) {}
  findStudents() {
    return this.studentRepository.find();
  }
  createStudents(studentDetails: CreateStudentParams) {
    const newSudent = this.studentRepository.create({
      ...studentDetails,
      createdAt: new Date(),
    });
    return this.studentRepository.save(newSudent);
  }
  updateStudents(id: number, updateStudentDetails: UpdateStudentParams) {
    return this.studentRepository.update({ id }, { ...updateStudentDetails });
  }
  deleteStudents(id: number) {
    return this.studentRepository.delete({ id });
  }
}
