const sessions = require('express-session')
const config = require('./config')
module.exports = sessions({
    secret: config.secret,
    resave: false,
    name: 'sahil',
    saveUninitialized: true,
    cookie: { 
        secure: false,
        httpOnly: true,
        maxAge: 36000000,
        sameSite:"lax",
        path:"/api"
        
    }
})
