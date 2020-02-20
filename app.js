
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

const indexRoute = require('./routes/index');
const docPortal = require('./routes/docPortal');
const pharmPortal = require('./routes/pharmPortal');

app.use(docPortal);
app.use(pharmPortal);
app.use(indexRoute);



app.listen(process.env.PORT || 3000,()=>{console.log('AHIS started!...')});
