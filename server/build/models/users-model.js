"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nickname: {
        type: new sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    login: {
        type: new sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    password: {
        type: new sequelize_1.DataTypes.STRING(64),
        allowNull: false,
    },
    admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "users",
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=users-model.js.map