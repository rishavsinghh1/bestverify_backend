const express = require('express');
const morgan = require('morgan');


const userRouter = require('./routes/userRoute')
const authRouter = require('./routes/authRoute');
const { responseHandler, errorValidatorHandler } = require('./helpers/response');
const { verifyToken } = require('./middleware/Authguard');





const app = express();
// require('express-group-routes');


app.use(express.json());
app.use(responseHandler);
app.use(errorValidatorHandler);




app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', verifyToken, userRouter)

//app.use('/api/v1/get-user-by-id', verifyToken, userRouter)






if (process.env.NODE_MODE == 'dev') {
    app.use(morgan('dev'))
}

module.exports = app;


