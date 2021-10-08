const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const port = process.env.PORT || 8000 ;

const app = express();


require('./db/connection');

const DefaultData = require('./default');
const bodyParser = require('body-parser');
DefaultData();

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json({ extended: true }));

app.use(require('./router/auth'));

app.listen(port, ()=>{
    console.log(`server is running at ${port}`);
});
