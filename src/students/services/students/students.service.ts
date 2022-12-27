import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typorm/entities/post';
import { Profile } from 'src/typorm/entities/profile';
import { student } from 'src/typorm/entities/student';
import {
  CreateStudentParams,
  CreatestudentPostParams,
  CreateStudentProfileParams,
  UpdateStudentParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(student) private studentRepository: Repository<student>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  findStudents() {
    return this.studentRepository.find();
  }
  findstudentbyId(id: number) {
    return this.studentRepository.find({
      where: { id: id },
      relations: {
        posts: true,
      },
    });
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
  async createStudentProfile(
    id: number,
    createSudentProfileDetails: CreateStudentProfileParams,
  ) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newProfile = this.profileRepository.create(
      createSudentProfileDetails,
    );
    const savedProfile = await this.profileRepository.save(newProfile);
    student.profile = savedProfile;
    return this.studentRepository.save(student);
  }
  async createStudentPost(
    id: number,
    createStudentPostDetails: CreatestudentPostParams,
  ) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newPost = this.postRepository.create({
      ...createStudentPostDetails,
      student,
    });
    return this.postRepository.save(newPost);
  }
}
