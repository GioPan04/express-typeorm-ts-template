require('dotenv').config();
import express from 'express';
require('express-async-errors');
import cors from 'cors';
import methods from './methods';
import errorHandler from './middlewares/errorhandler';
import notFound from './middlewares/notfound';
import boot from './boot';

boot().then((db) => {
    const app = express();
    
    app.use('/', methods);
    
    app.all('*', notFound);
    app.use(errorHandler);
    
    app.listen(8080);
});
