"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataElementsModule = void 0;
const common_1 = require("@nestjs/common");
const data_elements_service_1 = require("./data-elements.service");
const data_elements_controller_1 = require("./data-elements.controller");
const prisma_service_1 = require("../prisma.service");
let DataElementsModule = class DataElementsModule {
};
DataElementsModule = __decorate([
    (0, common_1.Module)({
        controllers: [data_elements_controller_1.DataElementsController],
        providers: [data_elements_service_1.DataElementsService, prisma_service_1.PrismaService]
    })
], DataElementsModule);
exports.DataElementsModule = DataElementsModule;
//# sourceMappingURL=data-elements.module.js.map