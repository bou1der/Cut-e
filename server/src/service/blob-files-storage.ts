import EasyYandexS3 from "easy-yandex-s3"
import config from "../../config.json"
import path from "node:path";
import * as fs from "fs";

class BlobStorage{
    s3:EasyYandexS3
    constructor() {
        const AccessKey:string = "YCAJEeqq3mxa5TdEp27as4E_e"
        const SecretKey:string = "YCPM465C346WPVKyTqaN-Ml8nprq-do74OlU6VpL"
        this.s3 = new EasyYandexS3({
            auth:{
                accessKeyId:`${AccessKey}`,
                secretAccessKey:`${SecretKey}`
            },
            Bucket:config.BlobStorage.StorageName,
            debug:true
        })
    }
    public async testMethod(){
        // const test = path.resolve('./src/service/photo.png')
        // console.log(test)4вч
        // console.log("Работает")
        // const write = await this.s3.Upload({path:test},'12758211/')
        const list = await this.s3.GetList('/12758211/')
        // console.log(list)
        if (!list){
            return
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

export default new BlobStorage()