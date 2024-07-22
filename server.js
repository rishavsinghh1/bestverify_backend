const dotenv = require('dotenv');
dotenv.config({path: './.config'});
const app = require('./index');
const fs = require('fs');
const https = require('https');
const port = process.env.PORT || 3002

if(process.env.APPENV == "PROD"){
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/staging.bestverify.in/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/staging.bestverify.in/fullchain.pem', 'utf8')
  };

  const httpsServer = https.createServer(options, app);

httpsServer.listen(port, () => {
  console.log(`Server is running on https://staging.bestverify.in:${port}`);
});
}else{
    app.listen(port, () => {
        console.log(`Server is running on localhost:${port}`);
      });
}

 