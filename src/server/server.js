import express from 'express'
import path from 'path';

const server = express();

server.use('/$', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

server.use('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/js', req.path));
});

const port = process.env.PORT || 5000;
server.listen(port);