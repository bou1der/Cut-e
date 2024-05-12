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
const profiles_routes_1 = __importDefault(require("./routes/profiles-routes"));
// routes
const jwt_check_middleware_1 = __importDefault(require("./middlewares/jwt-check-middleware"));
const post_mongo_model_1 = __importDefault(require("./models/no-relation-database/post-mongo-model"));
dotenv_1.default.config();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Length", "Content-Type", "Accept", "Authorization", "Access-Control-Allow-Origin"],
}));
app.use((0, cookie_parser_1.default)());
app.use('/api/test', async (req, res) => {
    const t = await post_mongo_model_1.default.create({ UID: 2, title: "test" });
    console.log(t);
});
app.use('/api/authorization', authorization_router_1.default);
app.use('/api/messanger', jwt_check_middleware_1.default, messanger_router_1.default);
app.use('/api/profile', jwt_check_middleware_1.default, profiles_routes_1.default);
exports.default = app;
// https://habr.com/ru/companies/oleg-bunin/articles/543946/
//# sourceMappingURL=server.js.map