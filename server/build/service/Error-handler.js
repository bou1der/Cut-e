"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandling {
    constructor() {
    }
    handle(res, status, log, values, text) {
        console.log(`ERROR:[${status}]: ${log} \n ______ \n`);
        console.log(values);
        console.log(`\n ______ \n ${text} \n`);
        res.status(status).json({ text });
    }
}
exports.default = new ErrorHandling();
//# sourceMappingURL=Error-handler.js.map