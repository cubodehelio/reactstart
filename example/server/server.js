
'use strict';
const sources = require('../../grunt/sources.js');
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const Logger = require('ts-logger');
const path = require('path');

const app = express();
const logger = Logger.logger();
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', process.env.PORT || sources.server.port || 3000);

app.use((req, res, next) => {
  logger.log('request!!');
  next();
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Additional middleware which will set headers that we need on each request.
app.use((req, res, next) => {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Disable caching so we'll always get the latest comments.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, (err, data) => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }
    const comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    const newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text
    };

    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (fsErr) => {
      if (fsErr) {
        logger.error(fsErr);
        process.exit(1);
      }
      res.json(comments);
    });
  });
});


app.listen(app.get('port'), () => {
  logger.info(`Server started: http://localhost:${app.get('port')}`);
});
