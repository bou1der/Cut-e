"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const jwt_service_1 = require("../service/jwt-service");
const users_model_1 = __importDefault(require("../models/users-model"));
const jwt_token_model_1 = __importDefault(require("../models/jwt-token-model"));
const register = async (req, res) => {
    try {
        const { nickname, login, password } = req.body;
        const exist = await users_model_1.default.findOne({ where: { login } });
        if (exist) {
            return Error_handler_1.default.handle(res, 500, "Пользователь уже существует", { login, password, exist }, "Ошибка выберите другой логин");
        }
        const hash = await bcrypt_1.default.hash(password, 10);
        const user = await users_model_1.default.create({ nickname, login, password: hash });
        const tokens = (0, jwt_service_1.genTokenHandler)({ id: user.dataValues.id, name: user.dataValues.nickname, admin: user.dataValues.admin });
        await (0, jwt_service_1.saveToken)(user.dataValues.id, tokens.refresh);
        res.cookie('refresh', tokens.refresh, { maxAge: 1728000, httpOnly: true });
        res.status(200).json({ tokens });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { login, password } = req.body;
        const exist = await users_model_1.default.findOne({ where: { login } });
        if (!exist) {
            return Error_handler_1.default.handle(res, 404, "Пользователь ненайден", req.body, "Проверьте пароль/логин");
        }
        const result = await bcrypt_1.default.compare(password, exist.dataValues.password);
        if (!result) {
            return Error_handler_1.default.handle(res, 404, "Неправильный пароль", req.body, "Проверьте пароль/логин");
        }
        const tokens = (0, jwt_service_1.genTokenHandler)({ id: exist.dataValues.id, name: exist.dataValues.nickname, admin: exist.dataValues.admin });
        await (0, jwt_service_1.saveToken)(exist.dataValues.id, tokens.refresh);
        res.cookie('refresh', tokens.refresh, { maxAge: 1728000, httpOnly: true });
        res.status(200).json({ tokens });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.login = login;
const refresh = async (req, res) => {
    try {
        const { refresh } = req.cookies;
        console.log(refresh);
        if (!refresh) {
            return Error_handler_1.default.handle(res, 404, "Отсутствует refresh токен", req.cookies, "Ненайденны некоторые данные");
        }
        const userData = (0, jwt_service_1.verifyRefreshToken)(refresh);
        const token = await jwt_token_model_1.default.findOne({ where: { refresh } });
        if (!userData || !token) {
            return Error_handler_1.default.handle(res, 404, "Пользователь ненайден", { token, userData });
        }
        const user = await users_model_1.default.findOne({ where: { id: userData.id } });
        if (!user) {
            return Error_handler_1.default.handle(res, 404, "Пользователь ненайден", { token, userData });
        }
        const tokens = (0, jwt_service_1.genTokenHandler)({ id: user.dataValues.id, name: user.dataValues.nickname, admin: user.dataValues.admin });
        await (0, jwt_service_1.saveToken)(user.dataValues.id, tokens.refresh);
        res.cookie('refresh', tokens.refresh, { maxAge: 1728000, httpOnly: true });
        res.status(200).json({ tokens });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.refresh = refresh;
const logout = async (req, res) => {
    try {
        const { refresh } = req.cookies;
        if (!refresh) {
            return Error_handler_1.default.handle(res, 404, "Отсутствует refresh токен", req.cookies, "Ненайденны некоторые данные");
        }
        if (!await jwt_token_model_1.default.findOne({ where: { refresh } })) {
            return Error_handler_1.default.handle(res, 404, "Пользователь ненайден в БД", req.cookies, "Пользователь ненайден");
        }
        const token = await (0, jwt_service_1.logoutToken)(refresh);
        res.clearCookie('refresh');
        res.status(200).json({ status: "Success" });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.logout = logout;
//# sourceMappingURL=authorization-controller.js.map