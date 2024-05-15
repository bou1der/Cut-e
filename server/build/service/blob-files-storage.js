"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import EasyYandexS3 from "easy-yandex-s3"
const blob_storage_model_1 = __importDefault(require("../models/blob-storage-model"));
const config_json_1 = __importDefault(require("../../config.json"));
const client_s3_1 = require("@aws-sdk/client-s3");
const uuid_1 = require("uuid");
class BlobStorage {
    constructor() {
        this.endpoint = config_json_1.default.BlobStorage.url;
        this.bucket = `${config_json_1.default.BlobStorage.StorageName}`;
        this.s3 = new client_s3_1.S3Client({
            endpoint: `https://${this.endpoint}`,
            credentials: {
                accessKeyId: `YCAJEeqq3mxa5TdEp27as4E_e`,
                secretAccessKey: `YCPM465C346WPVKyTqaN-Ml8nprq-do74OlU6VpL`
            },
            region: 'ru-central1'
        });
    }
    async SaveFile(file) {
        try {
            const key = (0, uuid_1.v4)();
            const res = await this.s3.send(await this._GenCommand(file.buffer, file.mimetype, key));
            if (res.$metadata.httpStatusCode !== 200) {
                throw Error("Неудачная загрузка файла");
            }
            const link = this._GetLink(key);
            const record = await blob_storage_model_1.default.create({ directory: `${key}`, link });
            return {
                key,
                link
            };
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    async SaveArrayFiles(files) {
        try {
            const BlobFiles = [];
            const promises = [];
            files.map(file => {
                const p = Promise.resolve(this.SaveFile(file));
                promises.push(p);
            });
            return await Promise.all(promises);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    _GetLink(key) {
        return `https://${this.endpoint}/${this.bucket}/${key}`;
    }
    async _GenCommand(FileBuffer, mimetype, key) {
        const Command = new client_s3_1.PutObjectCommand({ Bucket: this.bucket, Key: key || await (0, uuid_1.v4)(), Body: FileBuffer, ContentType: mimetype });
        return Command;
    }
}
exports.default = new BlobStorage();
//# sourceMappingURL=blob-files-storage.js.map