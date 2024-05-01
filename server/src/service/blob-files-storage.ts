import EasyYandexS3 from "easy-yandex-s3"
import config from "../../config.json"

class BlobStorage{
    s3:EasyYandexS3
    constructor() {
        this.s3 = new EasyYandexS3({
            auth:{
                accessKeyId:process.env.BLOB_AUTH_ACCESS_KEY!,
                secretAccessKey:process.env.BLOB_AUTH_SECRET_KEY!
            },
            Bucket:config.BlobStorage.StorageName,
            debug:true
        })
        console.log(this.s3)
    }
    private testMethod(){

    }

}

export default new BlobStorage()