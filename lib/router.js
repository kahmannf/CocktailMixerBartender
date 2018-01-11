const { Router } = require('express');
const arduino = require('./arduino-service');

const Beverage = require('./Beverage');

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, world!\n');
});

router.get('/test', (req, res) => {
  var bev = new Beverage();

  bev.name = "test";
  bev.output(2, 100)
  .then(() => res.send('done'))
  .catch((err) => res.send(err));
});

router.get('/arduino/:port', (req, res) => {
  arduino.open(req.params.port)
    .then(() => setTimeout(() => {
      arduino.close(req.params.port)
        .then(() => res.send('done'))
        .catch((err) => res.send(err));
    }, 3000))
    .catch((err) => res.send(err));
});

module.exports = router;
