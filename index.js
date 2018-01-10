const http = require('http');
const app = require('./lib/app');

const port = 5000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
