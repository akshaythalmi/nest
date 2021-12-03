import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { DataElementsService } from './data-elements.service';
import { CreateDataElementDto } from './dto/create-data-element.dto';


@Controller('data-elements')
export class DataElementsController {
  constructor(private readonly dataElementsService: DataElementsService) {}

  @Post()
  create(@Body() createDataElementDto: CreateDataElementDto) {
    return this.dataElementsService.create(createDataElementDto);
  }

  @Get()
  findAll() {
    return this.dataElementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataElementsService.findOne(+id);
  }


}
