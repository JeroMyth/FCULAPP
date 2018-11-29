var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    codigo: {type: String, required: true, unique: true},
    nome: {type: String, required: true},
    curso: { type: String, required: true },
    ects: {type: String, required: true},
    semestre: { type: String, required: true },
    ano: { type: String, required: false },
    professor: { type: String, required: false },
    duvidas: { type: String, required: false }
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Unidade', schema);
