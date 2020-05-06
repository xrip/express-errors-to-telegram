import querystring from 'querystring';
import { Request, Response, NextFunction } from 'express';
import * as https from 'https';

const htmlEntities = (text: string): string => text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export = (botToken: string, chatId: string, options: { handle4xx: boolean; handle5xx: boolean } = { handle4xx: false, handle5xx: true }) => (error: any, request: Request, response: Response, next: NextFunction) => {
    if (!options.handle5xx && (Number(error.status) >= 500 && Number(error.status) < 600) || !options.handle4xx && (Number(error.status) >= 400 && Number(error.status) < 500)) {
        return next();
    }
    const query = querystring.stringify({
        chat_id: chatId,
        parse_mode: 'HTML',
        text: `<pre>${htmlEntities(error.stack)}</pre>

<b>Request data:</b><pre>${htmlEntities(JSON.stringify({
        headers: request.headers,
        query: request.query,
        body: request.body || {},
    }, null, 4))}</pre>

<b>Request URL</b>: ${request.protocol}://${request.get('host')}${request.originalUrl}
<b>Request Method</b>: <code>${request.method}</code>
<b>Status Code</b>: <code>${error.status}</code>
<b>Remote Address</b>: ${request.ip || request.connection && request.connection.remoteAddress}`,
    });

    https.get(`https://api.telegram.org/bot${botToken}/sendMessage?${query}`);

    next();
};
