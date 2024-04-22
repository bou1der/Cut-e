"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandling {
    constructor() {
    }
    handle(res, status, log, values, message) {
        console.log(`ERROR:[${status}]: ${log} \n ______ \n`);
        console.log(values);
        console.log(`\n ______ \n ${message} \n`);
        res.status(status).json({ message });
    }
}
exports.default = new ErrorHandling();
//# sourceMappingURL=Error-handler.js.map