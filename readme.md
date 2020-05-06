# express-errors-to-telegram

> Express error handling middleware for reporting application errors to Telegram. Fully supports typescript.

## Setup

1) Obtain new bot token via @BotFather
2) Create *public* channel and add your bot to channel. After step 3 you can make channel private.
3) Open https://api.telegram.org/bot<botToken>/getChat?chat_id=@<channel> where botToken is token obtained at step 1 and channel is channel name created at step 2.
From response you need number from **id** field (e.g. -10014XXX54925):
>```json
>{"ok":true,"result":{"id":-1001411154925,"title":"<yout channel title>","username":"<your bot name>","type":"channel"}}
> ```

Now, when you have botToken and chat_id you can use it in your application.

## Install

```shell script
$ yarn add express-errors-to-telegram --save
```
or if you prefer npm
```shell script
$ npm install --save express-errors-to-telegram
```

## Usage

```js
const express = require('express');
const errorToTelegram = require('express-errors-to-telegram');

const app = express();

// Route that triggers a error
app.get('/error', function (req, res, next) {
  const err = new Error('Internal Server Error');
  err.status = 500;
  next(err);
})

// Send error reporting to Telegram
app.use(errorToTelegram('bot:token', 'chat_id', { handle4xx: false, handle5xx: true }));
app.listen(3000);
```
