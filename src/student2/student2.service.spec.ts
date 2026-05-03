import { Test, TestingModule } from '@nestjs/testing';
import { Student2Service } from './student2.service';

describe('Student2Service', () => {
  let service: Student2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Student2Service],
    }).compile();

    service = module.get<Student2Service>(Student2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
