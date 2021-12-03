import { Prisma } from '.prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateDataElementDto } from './dto/update-data-element.dto';
export declare class DataElementsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDataElementDto: Prisma.DataElementCreateInput): Prisma.Prisma__DataElementClient<import(".prisma/client").DataElement>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").DataElement[]>;
    findOne(id: number): Prisma.Prisma__DataElementClient<import(".prisma/client").DataElement>;
    update(id: number, updateDataElementDto: UpdateDataElementDto): string;
    remove(id: number): string;
}
