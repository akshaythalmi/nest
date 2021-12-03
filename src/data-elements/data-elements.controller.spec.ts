import { Test, TestingModule } from '@nestjs/testing';
import { DataElementsController } from './data-elements.controller';
import { DataElementsService } from './data-elements.service';

describe('DataElementsController', () => {
  let controller: DataElementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataElementsController],
      providers: [DataElementsService],
    }).compile();

    controller = module.get<DataElementsController>(DataElementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
