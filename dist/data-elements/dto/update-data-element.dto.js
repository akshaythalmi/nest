"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDataElementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_data_element_dto_1 = require("./create-data-element.dto");
class UpdateDataElementDto extends (0, mapped_types_1.PartialType)(create_data_element_dto_1.CreateDataElementDto) {
}
exports.UpdateDataElementDto = UpdateDataElementDto;
//# sourceMappingURL=update-data-element.dto.js.map