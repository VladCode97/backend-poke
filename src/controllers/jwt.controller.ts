import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";
import { NextFunction, Response, Request } from "express";
import { MessagesSystemEnum } from "../models/enums/messages.enum";

config();

export class JWTController {
  private static jwtController: JWTController;

  private constructor() {}

  static get Instance(): JWTController {
    if (JWTController.jwtController === undefined) {
      JWTController.jwtController = new JWTController();
    }
    return JWTController.jwtController;
  }

  singToken(token: string): string {
    return sign(token, String(process.env.JWT_TOKEN));
  }

  verify(token: string) {
    return verify(token.replace("Bearer", "").trim(), String(process.env.JWT_TOKEN));
  }

  verifyToken(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;
    const token = `${authorization}`.replace("Bearer", "").trim();
    verify(token, String(process.env.JWT_TOKEN), (error, _) => {
      if (!error) next();
      else return response.json({ message: MessagesSystemEnum.NOT_AUTHORIZED });
    });
  }
}
