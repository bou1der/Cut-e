// import EasyYandexS3 from "easy-yandex-s3"
import Storage from "../models/blob-storage-model";
import config from "../../config.json"
import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import {File} from "../types";
import {v4 as uuidv4} from "uuid"

class BlobStorage {
    private s3:S3Client
    private endpoint:string = config.BlobStorage.url
    private bucket:string = `${config.BlobStorage.StorageName}`

    constructor() {
        this.s3 = new S3Client({
            endpoint:`https://${this.endpoint}`,
            credentials:{
                accessKeyId:`YCAJEeqq3mxa5TdEp27as4E_e`,
                secretAccessKey:`YCPM465C346WPVKyTqaN-Ml8nprq-do74OlU6VpL`
            },
            region:'ru-central1'
        })
    }

    public async SaveFile(file:File){
        try{
            const key = uuidv4()
            const res= await this.s3.send(await this._GenCommand(file.buffer,file.mimetype,key))
            if (res.$metadata.httpStatusCode !== 200){
                throw Error("Неудачная загрузка файла")
            }
            const link = this._GetLink(key)
            const record = await Storage.create({directory:`${key}`,link})
            return{
                key,
                link
            }
        }catch (err) {
            console.log(err)
            throw err
        }
    }
    private _GetLink(key:string):string{
        return `https://${this.endpoint}/${this.bucket}/${key}`
    }
    private async _GenCommand(FileBuffer:Buffer,mimetype:string,key?:string):Promise<PutObjectCommand>{
        const Command = new PutObjectCommand({Bucket:this.bucket,Key:key || await uuidv4(),Body:FileBuffer,ContentType:mimetype})
        return Command
    }

}
export default new BlobStorage()