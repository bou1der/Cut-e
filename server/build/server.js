"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const config_json_1 = __importDefault(require("../config.json"));
// routes
const authorization_router_1 = __importDefault(require("./routes/authorization-router"));
// routes
dotenv_1.default.config();
// http://localhost:3000/
app.use((0, cors_1.default)({
    origin: config_json_1.default.server.cors.origin,
    credentials: true,
    allowedHeaders: "*",
}));
app.use((0, cookie_parser_1.default)());
app.use('/api/authorization', authorization_router_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map