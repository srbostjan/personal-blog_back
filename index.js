const express = require('express');
const cors = require('cors');

const routerApi = require('./server/index.js');
const { errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 4000;

const whiteList = ['http://localhost:3000', 'http://localhost:4000', 'http://localhost:8080', 'http://localhost:5000', 'http://localhost:8000', 'https://srbostjan.me', 'https://www.srbostjan.me', 'http://srbostjan.me/', 'http://www.srbostjan.me/'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.use(cors());
app.use(express.json());

routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
