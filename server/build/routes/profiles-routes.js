"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_controller_1 = require("../controllers/profiles-controller");
const file_uploads_middleware_1 = __importDefault(require("../middlewares/file-uploads-middleware"));
const Parser = express_1.default.json();
const router = express_1.default.Router();
router.post("/fetch", Parser, async (req, res) => {
    await (0, profiles_controller_1.getProfile)(req, res);
});
router.post("/upload/images", Parser, file_uploads_middleware_1.default.any(), async (req, res) => {
    await (0, profiles_controller_1.UploadProfileImages)(req, res);
});
router.post("/find", Parser, async (req, res) => {
    await (0, profiles_controller_1.foundProfile)(req, res);
});
router.post("/upload/post", Parser, async (req, res) => {
    await (0, profiles_controller_1.UploadPost)(req, res);
});
exports.default = router;
//# sourceMappingURL=profiles-routes.js.map