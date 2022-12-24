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
import { createStudentsDto } from 'src/students/dtos/CreateStudents.dto';
import { UpdateStudentDto } from 'src/students/dtos/UpdateStudents.dto';
import { StudentsService } from 'src/students/services/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {} //ekkada echine studentsservice nu post lo use chstunnam
  @Get()
  async getStudents() {
    const students = await this.studentService.findStudents();
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
}
