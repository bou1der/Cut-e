"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckToken = void 0;
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const jwt_service_1 = require("../service/jwt-service");
const CheckToken = (req, res, next) => {
    try {
        const exist = req.headers.authorization;
        if (!exist) {
            Error_handler_1.default.handle(res, 403, "Отсутсвует access токен", req.headers, "Проблемы с некоторыми данными");
            return next(403);
        }
        const access = exist.split(' ');
        console.log(access);
        if (!access[1] || access[1] === null) {
            Error_handler_1.default.handle(res, 403, "Отсутсвует access токен", req.headers, "Проблемы с некоторыми данными");
            return next(403);
        }
        const data = (0, jwt_service_1.verifyToken)(access[1]);
        if (!data) {
            Error_handler_1.default.handle(res, 403, "Невалидный токен", { verify: data, token: exist }, "Нелегал найден, депортировать");
            return next(403);
        }
        req.body.user = data;
        next();
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.headers, "Непредвиденная ошибка сервера");
    }
};
exports.CheckToken = CheckToken;
exports.default = exports.CheckToken;
//# sourceMappingURL=jwt-check-middleware.js.map