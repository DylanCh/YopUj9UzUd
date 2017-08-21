/**
 * Author: Hanjun Chen
 * Created: 8/18/2017
 */
'use strict';
var loopback = require('loopback');
var app = loopback();

const PORT = 8081;

// static files to be referenced on the home page
app.use('/public',loopback.static(__dirname+'/client'));

var homeCallback = require('./Routes/Index');
app.get(['/','/home','index'],homeCallback);

var homeMobileCallback = require('./Routes/Index.Mobile');
app.get(['/m'],homeMobileCallback);

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`);
});