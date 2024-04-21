"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = void 0;
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const register = async (req, res) => {
    try {
        res.status(200).json({ status: "ok" });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.login = login;
const refresh = async (req, res) => {
    try {
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.refresh = refresh;
const logout = async (req, res) => {
    try {
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.logout = logout;
//# sourceMappingURL=authorization-controller.js.map