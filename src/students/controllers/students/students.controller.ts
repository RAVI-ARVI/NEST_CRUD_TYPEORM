import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentProfiledto } from 'src/students/dtos/CreateStudentProfile.dto';
import { createStudentsDto } from 'src/students/dtos/CreateStudents.dto';
import { UpdateStudentDto } from 'src/students/dtos/UpdateStudents.dto';
import { StudentsService } from 'src/students/services/students/students.service';
import { CreatestudentPostParams } from 'src/utils/types';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}
  @Get()
  async getStudents() {
    const students = await this.studentService.findStudents();
    return students;
  }
  @Get(':id')
  async getStudentsbyID(@Param('id', ParseIntPipe) id: number) {
    const students = await this.studentService.findstudentbyId(id);
    return students;
  }
  @Post()
  createStudents(@Body() CreateStudentsDto: createStudentsDto) {
    return this.studentService.createStudents(CreateStudentsDto);
  }
  @Put(':id')
  async updateStudentById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    await this.studentService.updateStudents(id, updateStudentDto);
  }
  @Delete(':id')
  async deleteStudentById(@Param('id', ParseIntPipe) id: number) {
    await this.studentService.deleteStudents(id);
  }
  @Post(':id/profiles')
  createStudentProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createStudentProfileDto: CreateStudentProfiledto,
  ) {
    return this.studentService.createStudentProfile(
      id,
      createStudentProfileDto,
    );
  }
  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreatestudentPostParams,
  ) {
    return this.studentService.createStudentPost(id, createUserPostDto);
  }
}
