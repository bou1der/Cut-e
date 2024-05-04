
export {}
export type File = {
    fieldname:string,
    originalname:string,
    encoding:string,
    mimetype:string,
    buffer:Buffer,
    size:number
}
declare global{
    namespace Express{
        interface Request{
            user:{id:number},
            files:Array<file>
        }
    }
}