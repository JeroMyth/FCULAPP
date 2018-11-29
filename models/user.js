var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    fullName: { type: String, required: true },
    userCurso: { type: String, required: true },
    userNumero: { type: String, required: true },
    userNif: { type: String, required: true },
    senhas1:  { type: Number, required: true },
    senhas2:  { type: Number, required: true },
    senhas3:  { type: Number, required: true },
    senhas4:  { type: Number, required: true },
    senhas5:  { type: Number, required: true }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);