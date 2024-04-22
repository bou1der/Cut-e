import {Response} from "express"
interface ErrorHandleInterface {
    handle(
        res:Response,
        status:number,
        log:object | string,
        values?:string | number | object,
        text?:string,
    ):void
}
class ErrorHandling implements ErrorHandleInterface {
    constructor() {
    }
    handle(res:Response, status: number, log: object | string, values?: string | number | object, message?: string) {
        console.log(`ERROR:[${status}]: ${log} \n ______ \n`)
        console.log(values)
        console.log(`\n ______ \n ${message} \n`)

        res.status(status).json({message})
    }
}

export default new ErrorHandling()