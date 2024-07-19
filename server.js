const dotenv = require('dotenv');
dotenv.config({path: './.config'});
const app = require('./index');

const port = process.env.PORT || 3000

app.listen(port, (res) =>{
    console.log(`port is running on  ${port}`);
})