"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadProfileImages = exports.foundProfile = exports.getProfile = void 0;
const Error_handler_1 = __importDefault(require("../service/Error-handler"));
const blob_files_storage_1 = __importDefault(require("../service/blob-files-storage"));
// models
const sequelize_1 = __importDefault(require("sequelize"));
const blob_storage_model_1 = __importDefault(require("../models/blob-storage-model"));
const profile_model_1 = __importDefault(require("../models/profile-model"));
const sequelize_2 = require("sequelize");
// models
const getProfile = async (req, res) => {
    var _a, _b;
    try {
        const { id } = req.body;
        if (!id) {
            return Error_handler_1.default.handle(res, 404, "Profile undefined", req.body, "Профиль ненайден");
        }
        const profile = await profile_model_1.default.findOne({
            where: { UID: id },
            include: [
                {
                    model: blob_storage_model_1.default,
                    as: "av"
                },
                {
                    model: blob_storage_model_1.default,
                    as: "bg"
                }
            ]
        });
        if (!profile) {
            Error_handler_1.default.handle(res, 404, "Profile undefined", req.body, "Профиль ненайден");
            return;
        }
        res.status(200).json({
            UID: profile.dataValues.UID,
            name: profile.dataValues.name,
            avatar: (_a = profile.av) === null || _a === void 0 ? void 0 : _a.dataValues.link,
            background: (_b = profile.bg) === null || _b === void 0 ? void 0 : _b.dataValues.link,
            isPrivate: profile.dataValues.isPrivate,
            isChannel: profile.dataValues.isChannel
        });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
        console.log(err);
    }
};
exports.getProfile = getProfile;
const foundProfile = async (req, res) => {
    try {
        const { queryParams } = req.body;
        if (!queryParams) {
            return Error_handler_1.default.handle(res, 404, "Параметры запроса ненайдены", req.body, "Invalid query");
        }
        const profiles = await profile_model_1.default.findAll({
            where: {
                name: {
                    [sequelize_2.Op.like]: `%${queryParams}%`
                }
            },
            include: [
                {
                    model: blob_storage_model_1.default,
                    as: "av",
                    attributes: ['link']
                },
                {
                    model: blob_storage_model_1.default,
                    as: "bg",
                    attributes: ['link']
                }
            ],
            attributes: {
                include: [
                    [sequelize_1.default.col('av.link'), 'avatar'],
                    [sequelize_1.default.col('bg.link'), 'background']
                ]
            }
        });
        res.status(200).json(profiles);
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
    }
};
exports.foundProfile = foundProfile;
const UploadProfileImages = async (req, res) => {
    try {
        const UID = req.user.id;
        console.log(req.files);
        if (!Array.isArray(req.files)) {
            return;
        }
        const profile = await profile_model_1.default.findOne({
            where: { UID, isChannel: false }
        });
        if (!profile) {
            return Error_handler_1.default.handle(res, 404, "Профиль ненайден", UID, "Профиль ненайден");
        }
        const blob = await blob_files_storage_1.default.SaveFile(req.files[0]);
        const file = await blob_storage_model_1.default.findOne({ where: { directory: blob.key } });
        if (!file) {
            return Error_handler_1.default.handle(res, 500, "Файл ненайден в блоб", blob, "Ошибка записи");
        }
        console.log(req.files[0].fieldname);
        if (req.files[0].fieldname === 'avatar') {
            await profile.update({ avatar: file.id });
        }
        else if (req.files[0].fieldname === 'background') {
            await profile.update({ background: file.id });
        }
        res.status(200).json({ avatar: profile.avatar, background: profile.background });
    }
    catch (err) {
        Error_handler_1.default.handle(res, 500, err, req.body, "Непредвиденная ошибка");
        console.log(err);
    }
};
exports.UploadProfileImages = UploadProfileImages;
//# sourceMappingURL=profiles-controller.js.map