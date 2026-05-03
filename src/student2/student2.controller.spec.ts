import { Test, TestingModule } from '@nestjs/testing';
import { Student2Controller } from './student2.controller';

describe('Student2Controller', () => {
  let controller: Student2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Student2Controller],
    }).compile();

    controller = module.get<Student2Controller>(Student2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
