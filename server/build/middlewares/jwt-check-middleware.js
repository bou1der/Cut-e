"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_service_1 = require("../service/jwt-service");
const CheckToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
        }
        const accessToken = authHeader.split(' ');
        if (!accessToken[1] || accessToken[1] === 'null') {
            return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
        }
        const data = (0, jwt_service_1.verifyAccessToken)(accessToken[1]);
        if (!data) {
            return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
        }
        req.user = { id: data.id };
        next();
    }
    catch (e) {
        console.log(e);
        return next(res.status(500).json({ error: `${e}` }));
    }
};
exports.default = CheckToken;
//# sourceMappingURL=jwt-check-middleware.js.map