import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private student = [
    {id: 1, name: 'Ashu', age: 23},
    {id: 2, name: 'yadav', age: 23},
  ];
  getAllStudents(){
    return this.student;
  }
  getStudentById(id: number){
    const student = this.getAllStudents().find((s) => s.id===id);
    if(!student) throw new NotFoundException('Student not found!');
    return student;
    }
    //Post 
    createStudent(data: {name: string; age: number}){
      const bewStudent ={
        id: Date.now(),
        ...data,

      };
      this.student.push(bewStudent);
      return bewStudent;
    }
    //PUT
    updateStudent(id: number, data: {name:string; age: number}){
      const index = this.getAllStudents().findIndex((s) => s.id ===id);
      if(index === -1) throw new NotFoundException('Student not found!');
      this.student[index] = {id, ...data};
      return this.student[index];
    }

    //PATCH
    patchStudent(id: number, data: Partial<{name: string; age: number}>){
      const student =this.getStudentById(id);
      Object.assign(student, data);
      return student;
    }
    // DELETE
    deleteStudent(id: number){
      const index = this.getAllStudents().findIndex((s) => s.id===id);
    if(index === -1) throw new NotFoundException('Student not found!');
    const deleted = this.student.splice(index,1);
    return {message: 'Student Deleted', student: deleted[0]};

    }
}
