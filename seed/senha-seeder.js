var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-angular-fcul');
var Senha = require('../models/senha');

var senha = new Senha({
        licenciatura: 0,
        mestrado: 0,
        doutoramento: 0,
        pagamentoPropinas: 0,
        tesouraria: 0,
    });

senha.save(function (err, result) {                
            if (err) {
                console.log("error");
            }
            else{
                console.log("NO ERRO PASSED");
                exit();
            } 
    });

function exit() {
    mongoose.disconnect();
}