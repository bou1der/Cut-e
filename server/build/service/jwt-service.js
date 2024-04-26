"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.logoutToken = exports.saveToken = exports.genTokenHandler = void 0;
const jwt_token_model_1 = __importDefault(require("../models/jwt-token-model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_json_1 = __importDefault(require("../../config.json"));
const genTokenHandler = (payload) => {
    const access = jsonwebtoken_1.default.sign(payload, config_json_1.default.JWT.AccessKey, { expiresIn: '20m' });
    const refresh = jsonwebtoken_1.default.sign(payload, config_json_1.default.JWT.RefreshKey, { expiresIn: '20d' });
    return {
        refresh, access
    };
};
exports.genTokenHandler = genTokenHandler;
const saveToken = async (userId, refresh) => {
    const exist = await jwt_token_model_1.default.findOne({ where: { id: userId } });
    if (exist) {
        await exist.update({ refresh });
        return;
    }
    return await jwt_token_model_1.default.create({ id: userId, refresh });
};
exports.saveToken = saveToken;
const logoutToken = async (refresh) => {
    const exist = await jwt_token_model_1.default.findOne({ where: { refresh } });
    if (!exist) {
        return;
    }
    await exist.update({ refresh: "" });
};
exports.logoutToken = logoutToken;
const verifyToken = (token, isRefresh) => {
    if (isRefresh) {
        const data = jsonwebtoken_1.default.verify(token, config_json_1.default.JWT.RefreshKey);
        return data;
    }
    return jsonwebtoken_1.default.verify(token, config_json_1.default.JWT.AccessKey);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt-service.js.map