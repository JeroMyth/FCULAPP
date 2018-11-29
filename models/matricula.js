var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


var schema = new Schema({
    anoLectivo: {type: String, required: true},
    validade: {type: String, required: true},
    unidades: { type: [String], required: true },
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Matricula', schema);