"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("sequelize"));
const sequelize_connect_1 = __importDefault(require("./sequelize-connect"));
class Posts extends sequelize_1.Model {
}
Posts.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    ProfileID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    AuthorID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    timestamp: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_2.default.NOW,
        allowNull: false,
    }
}, {
    sequelize: sequelize_connect_1.default,
    tableName: "posts",
    modelName: "posts"
});
exports.default = Posts;
//# sourceMappingURL=posts-model.js.map