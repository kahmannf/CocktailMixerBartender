const { Router } = require('express');
const arduino = require('./arduino-service');

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello, world!\n');
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
