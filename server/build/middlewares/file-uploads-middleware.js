"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const filterTypes = ['image/png', 'image/jpg', 'image/jpeg',];
const filter = (req, file, cb) => {
    if (filterTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
exports.default = (0, multer_1.default)({ storage: undefined, fileFilter: filter });
//# sourceMappingURL=file-uploads-middleware.js.map