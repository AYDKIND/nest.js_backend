import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { Student2Service } from './student2.service';
import { Student2Controller } from './student2.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Student.name, schema: StudentSchema}])
  ],
  providers: [Student2Service],
  controllers: [Student2Controller]
})
export class Student2Module {}
