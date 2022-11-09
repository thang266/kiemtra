const express = require('express');

const configViewEngine = (app)=>{
    app.set('views','./src/views');
    app.set('view engine','ejs')
}
module.exports = configViewEngine;