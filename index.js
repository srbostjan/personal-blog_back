const express = require('express');
const cors = require('cors');

const routerApi = require('./server/index.js');
const { errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

routerApi(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
