import {Response,Request, NextFunction} from "express"
import error from "../service/Error-handler"
import {verifyAccessToken} from "../service/jwt-service"


interface JwtPayload {
    id:number
    name:string
    admin:boolean
}
const CheckToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
      }
      const accessToken = authHeader.split(' ');
      if (!accessToken[1] || accessToken[1] === 'null') {
        return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
      }
      const data = verifyAccessToken(accessToken[1]) as JwtPayload
      if (!data) {
        return next(res.status(403).json({ message: 'Пользователь не зарегистрирован' }));
      }
  
      req.user = { id: data.id };
      next();
    } catch (e) {
      console.log(e);
      return next(res.status(500).json({ error: `${e}` }));
    }
  };
  export default CheckToken;