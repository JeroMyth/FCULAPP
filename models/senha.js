var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    licenciatura: {type: Number, required: true, unique: true},
    mestrado: {type: Number, required: true},
    doutoramento: { type: Number, required: true },
    pagamentoPropinas: { type: Number, required: true },
    tesouraria: { type: Number, required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Senha', schema);
