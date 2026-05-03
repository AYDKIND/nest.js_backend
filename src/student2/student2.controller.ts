import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { StudentService } from '../student/student.service';
import { Student2Service } from './student2.service';
import { Student, StudentDocument } from './student.schema';

@Controller('student2')
export class Student2Controller {
  constructor(private readonly studentService: Student2Service){}
  @Post()
  async addStudent(@Body() data: Partial<Student>){
    return this.studentService.createStudent(data);
  } 
  @Get()
 async getStudents(){
  return this.studentService.getAllStudents();

 }
  @Get(':id')
  async getStudent(@Param('id') id: string){ 
   return this.studentService.getStudentById(id);
  }
}
