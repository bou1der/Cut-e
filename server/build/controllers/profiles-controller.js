"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = void 0;
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const profile_model_1 = __importDefault(require("../models/profile-model"));
const getProfile = async (req, res) => {
    try {
        const { id } = req.body;
        const profile = await profile_model_1.default.findOne({ where: { UID: id } });
        if (!profile) {
            Error_handler_1.default.handle(res, 404, "Profile undefined", req.body, "Профиль ненайден");
            return;
        }
        res.status(200).json({
            UID: profile.dataValues.UID,
            name: profile.dataValues.name,
            avatar: profile.dataValues.avatar,
            background: profile.dataValues.background,
            isPrivate: profile.dataValues.isPrivate,
            isChannel: profile.dataValues.isChannel
        });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.getProfile = getProfile;
//# sourceMappingURL=profiles-controller.js.map