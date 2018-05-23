const express = require('express');

const app = express();

const router = express.Router();

const path = __dirname + '/views/';

const port = 3000;

app.use(express.static('public'));

app.use('/', router);

router.get('/', (req, res) => {
    res.sendFile(path + '/index.html');
});

app.use('*', (req, res) => {
    res.send('NOT FOUND');
});

app.listen(port, () => {
    console.log(`Listening at port: http://localhost:${port}`);
})