import express from 'express'
import path from 'path';

const server = express();

server.use('/', express.static(path.join(__dirname,'../../dist')));

const port = process.env.PORT || 8080;
server.listen(port);
