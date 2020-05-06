/// <reference types="qs" />
import { Request, Response, NextFunction } from 'express';
declare const _default: (botToken: string, chatId: string, options?: {
    handle4xx: boolean;
    handle5xx: boolean;
}) => (error: any, request: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, response: Response<any>, next: NextFunction) => void;
export default _default;
