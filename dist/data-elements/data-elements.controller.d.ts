import { DataElementsService } from './data-elements.service';
import { CreateDataElementDto } from './dto/create-data-element.dto';
export declare class DataElementsController {
    private readonly dataElementsService;
    constructor(dataElementsService: DataElementsService);
    create(createDataElementDto: CreateDataElementDto): import(".prisma/client").Prisma.Prisma__DataElementClient<import(".prisma/client").DataElement>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").DataElement[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DataElementClient<import(".prisma/client").DataElement>;
}
