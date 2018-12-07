
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/api/:start/:end', (req, res) => {
  const { start, end } = req.params;
  console.log(req.params);
  if (start === '0' || end === '0') {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } else {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
