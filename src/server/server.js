import express from 'express'
import path from 'path';
import { serverRenderer } from '../serverRenderer';

const server = express();

server.use(express.static(path.join(__dirname,'../../../dist')));
server.use('/*', (req, res) => {
  serverRenderer(req, res);
});
// server.use(serverRenderer());

const port = process.env.PORT || 8080;
server.listen(port);
