"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class Storage extends sequelize_1.Model {
}
Storage.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    directory: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "blobstorage",
    modelName: "blobstorage"
});
exports.default = Storage;
//# sourceMappingURL=blob-storage-model.js.map