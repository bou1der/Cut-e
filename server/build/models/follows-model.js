"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class Follows extends sequelize_1.Model {
}
Follows.init({
    profileID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    UID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "follows",
    modelName: "follows"
});
exports.default = Follows;
//# sourceMappingURL=follows-model.js.map