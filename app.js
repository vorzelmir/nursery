const express = require('express');
const userRouter = require('./routes/userRouter');
const petRouter = require('./routes/petRouter');
const nurseryRouter = require('./routes/nurseryRouter');

const app = express();
app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/pets', petRouter);
app.use('/api/v1/nurseries', nurseryRouter);

module.exports = app;
