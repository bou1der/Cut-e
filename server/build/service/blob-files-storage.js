"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const easy_yandex_s3_1 = __importDefault(require("easy-yandex-s3"));
const config_json_1 = __importDefault(require("../../config.json"));
class BlobStorage {
    constructor() {
        this.s3 = new easy_yandex_s3_1.default({
            auth: {
                accessKeyId: process.env.BLOB_AUTH_ACCESS_KEY,
                secretAccessKey: process.env.BLOB_AUTH_SECRET_KEY
            },
            Bucket: config_json_1.default.BlobStorage.StorageName,
            debug: true
        });
        console.log(this.s3);
    }
    testMethod() {
    }
}
exports.default = new BlobStorage();
//# sourceMappingURL=blob-files-storage.js.map