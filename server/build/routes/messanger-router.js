"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messanger_controller_1 = require("../controllers/messanger-controller");
const Parser = express_1.default.json();
const router = express_1.default.Router();
router.post("/chats", Parser, (req, res) => {
    (0, messanger_controller_1.fetchChats)(req, res);
});
exports.default = router;
//# sourceMappingURL=messanger-router.js.map