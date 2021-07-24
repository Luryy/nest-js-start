import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddlewareDI implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Log middleware from DI');
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Log middleware from function');
  next();
}

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
  console.log('Log global middleware');
  next();
}
