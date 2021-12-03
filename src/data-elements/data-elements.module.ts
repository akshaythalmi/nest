import { Module } from '@nestjs/common';
import { DataElementsService } from './data-elements.service';
import { DataElementsController } from './data-elements.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DataElementsController],
  providers: [DataElementsService, PrismaService]
})
export class DataElementsModule {}
