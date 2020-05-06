# express-errors-to-telegram

> Express error handling middleware for reporting application errors to Telegram. Fully supports typescript.

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
