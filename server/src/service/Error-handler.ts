import {Response} from "express"
interface ErrorHandleInterface {
    handle(
        res:Response,
        status:number,
        log:object,
        values?:string | number | object,
        text?:string,
    ):void
}
class ErrorHandling implements ErrorHandleInterface {
    constructor() {
    }
    handle(res:Response, status: number, log: object, values?: string | number | object, text?: string) {
        console.log(`ERROR:[${status}]: ${log} \n ______ \n`)
        console.log(values)
        console.log(`\n ______ \n ${text} \n`)

        res.status(status).json({text})
    }
}

export default new ErrorHandling()