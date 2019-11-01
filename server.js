const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');
const morgan = require('morgan');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

const userRoutes = require('./routes/user');
const tableRoutes = require('./routes/tableRoute'); 

app.use('/posts', userRoutes);
app.use('/tables', tableRoutes);

app.use(cors());

mongoose.set('useCreateIndex', true);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () =>console.log("Connected to DB")
);

app.listen(PORT);



