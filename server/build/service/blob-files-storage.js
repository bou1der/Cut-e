"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const easy_yandex_s3_1 = __importDefault(require("easy-yandex-s3"));
const config_json_1 = __importDefault(require("../../config.json"));
class BlobStorage {
    constructor() {
        const AccessKey = "YCAJEeqq3mxa5TdEp27as4E_e";
        const SecretKey = "YCPM465C346WPVKyTqaN-Ml8nprq-do74OlU6VpL";
        this.s3 = new easy_yandex_s3_1.default({
            auth: {
                accessKeyId: `${AccessKey}`,
                secretAccessKey: `${SecretKey}`
            },
            Bucket: config_json_1.default.BlobStorage.StorageName,
            debug: true
        });
    }
    async testMethod() {
        // const test = path.resolve('./src/service/photo.png')
        // console.log(test)4вч
        // console.log("Работает")
        // const write = await this.s3.Upload({path:test},'12758211/')
        const list = await this.s3.GetList('/12758211/');
        // console.log(list)
        if (!list) {
            return;
        }
        //     const data:Array<string> = []
        //     list.Contents?.map((file)=>{
        //         if (!file.Key){return}
        //         data.push(file.Key)
        //     })
        //     // console.log(data)
        //     this.s3.
        //     const get = await this.s3.Download(data[0])
        //     if (get){
        //         get.destinationFullPath
        //     }
        //     console.log(get)
        // }
    }
}
exports.default = new BlobStorage();
//# sourceMappingURL=blob-files-storage.js.map