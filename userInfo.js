var express = require('express')
var app = express()

app.get('/api/whoami', (req, res)=>{
    var ip = (req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress || 
    '').split(',')[0].trim();
    var preferredLanguage = req.headers['accept-language']
    var sysInfo = req.headers['user-agent']
    res.status(200).json({ipaddress: ip, language: preferredLanguage, software: sysInfo})
})
module.exports = app;
