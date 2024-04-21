"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const JsonParser = express_1.default.json();
// controller
const authorization_controller_1 = require("../controllers/authorization-controller");
// controller
router.post("/register", JsonParser, async (req, res) => {
    (0, authorization_controller_1.register)(req, res);
});
router.post("/login", JsonParser, async (req, res) => {
    return await (0, authorization_controller_1.login)(req, res);
});
router.post("/refresh", JsonParser, async (req, res) => {
    return await (0, authorization_controller_1.refresh)(req, res);
});
router.post("/logout", JsonParser, async (req, res) => {
    return await (0, authorization_controller_1.logout)(req, res);
});
exports.default = router;
//# sourceMappingURL=authorization-router.js.map