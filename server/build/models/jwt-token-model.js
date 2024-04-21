"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class Tokens extends sequelize_1.Model {
}
Tokens.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    refresh: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: true,
    },
}, {
    sequelize: sequelize_connect_1.default, // Подключение к базе данных Sequelize
    modelName: 'tokens', // Наименование модели в Sequelize
    tableName: 'tokens', // Наименование таблицы в базе данных
});
exports.default = Tokens;
//# sourceMappingURL=jwt-token-model.js.map