var express = require('express');
var axios = require('axios');

var app = express();
var port = 3000;

app.get('/api/matches', (req, res) =>
    axios
        .get('http://globoesporte.globo.com/temporeal/futebol/central.json')
        .then(response => res.status(200).send(response.data))
);

app.listen(port, error => {
    if (error) {
        console.error(error)
    } else {
        console.info('🌎 Listening at http://localhost:%s/', port)
    }
});
