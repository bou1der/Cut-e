"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("../../config.json"));
const connection = new sequelize_1.Sequelize(`${config_json_1.default.server.database.name}`, `${config_json_1.default.server.database.user}`, `${config_json_1.default.server.database.password}`, {
    host: `${config_json_1.default.server.database.host}`,
    dialect: 'mysql'
});
const checkConnection = async () => {
    const test = await connection.authenticate();
    if (test === undefined) {
        console.log(`[DATABASE]:${config_json_1.default.server.database.name}: Success connection ...`);
    }
};
try {
    checkConnection();
}
catch (e) {
    console.log(e);
}
exports.default = connection;
//# sourceMappingURL=sequelize-connect.js.map