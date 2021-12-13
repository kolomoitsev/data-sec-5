const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const paymentApi = require('./api');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', paymentApi);


const PORT = 3002;

server = app.listen(PORT, () => console.log(`server running on port ${PORT}`));
