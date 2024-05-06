"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
const blob_storage_model_1 = __importDefault(require("./blob-storage-model"));
class Profile extends sequelize_1.Model {
}
Profile.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    UID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    background: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    isChannel: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isPrivate: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "profiles",
    modelName: "profiles"
});
Profile.hasOne(blob_storage_model_1.default, {
    foreignKey: { field: "id", allowNull: true },
    sourceKey: "avatar",
    as: "av"
});
Profile.hasOne(blob_storage_model_1.default, {
    foreignKey: { field: "id", allowNull: true },
    sourceKey: "background",
    as: "bg"
});
exports.default = Profile;
//# sourceMappingURL=profile-model.js.map