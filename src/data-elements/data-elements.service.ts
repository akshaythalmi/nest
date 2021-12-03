import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateDataElementDto } from './dto/create-data-element.dto';
import { UpdateDataElementDto } from './dto/update-data-element.dto';

@Injectable()
export class DataElementsService {
  constructor(private prisma: PrismaService) {}

  create(createDataElementDto: Prisma.DataElementCreateInput) {
    return this.prisma.dataElement.create({
      data: createDataElementDto
    })
  }

  findAll() {
    return this.prisma.dataElement.findMany();
  }

  findOne(id: number) {
    return this.prisma.dataElement.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateDataElementDto: UpdateDataElementDto) {
    return `This action updates a #${id} dataElement`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataElement`;
  }
}
