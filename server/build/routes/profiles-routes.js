"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_controller_1 = require("../controllers/profiles-controller");
const Parser = express_1.default.json();
const router = express_1.default.Router();
router.post("/fetch", Parser, async (req, res) => {
    await (0, profiles_controller_1.getProfile)(req, res);
});
exports.default = router;
//# sourceMappingURL=profiles-routes.js.map