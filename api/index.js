var express = require('express');
const cors = require("cors")
const bodyParser = require("body-parser")
var app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
require('./routes')(app);
app.listen(3001, () => console.log(`App listening on port 3001`)) 