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
// routes
const authorization_router_1 = __importDefault(require("./routes/authorization-router"));
const messanger_router_1 = __importDefault(require("./routes/messanger-router"));
// routes
const jwt_check_middleware_1 = __importDefault(require("./middlewares/jwt-check-middleware"));
dotenv_1.default.config();
// http://localhost:3000/
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "Access-Control-Allow-Origin"],
}));
app.use((0, cookie_parser_1.default)());
app.use('/test', () => {
});
app.use('/api/authorization', authorization_router_1.default);
app.use('/api/messanger/', jwt_check_middleware_1.default, messanger_router_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map