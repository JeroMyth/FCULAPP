var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Matricula = require('../models/matricula');
var Unidade = require('../models/unidade');

router.post('/', function (req, res, next) {
        var user = new User({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                fullName: req.body.fullName,
                userCurso: req.body.userCurso,
                userNumero: req.body.userNumero,
                userNif: req.body.userNif,
                senhas1: req.body.senhas1,
                senhas2: req.body.senhas2,
                senhas3: req.body.senhas3,
                senhas4: req.body.senhas4,
                senhas5: req.body.senhas5
        });

    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
        res.status(201).json({
            message: 'User created',
            obj: result
            });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                    title: 'An error occurred',
                    error: err
             });
        }
        if (!user) {
            return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
             return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
        }

        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id });
    });
});

router.post('/inscricao', function (req, res, next) {
    //var expUnidades = new Unidade({ any : [] })

   // for (let index = 0; index < res.body.unidades.length; index++) {
   //     expUnidades[index] = new Unidade({
   //
    //        codigo: res.body.unidades[index].codigo ,
    //        nome: res.body.unidades[index].nome ,
    //        curso: res.body.unidades[index].curso ,
    //        ects: res.body.unidades[index].ects ,
    //        semestre: res.body.unidades[index].semestre
    //    })

    //}

    var matricula = new Matricula({
        anoLectivo: req.body.anoLectivo,
        validade: req.body.validade ,
        unidades: req.body.unidades,
        id_user: req.body.id_user
    });

    matricula.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Matricula submited',
            obj: result
        });
    });
});

router.get('/matricula_user', function (req, res, next) {
    Matricula.find().exec(function (err, all_matricula) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!all_matricula) {
            return res.status(401).json({
                title: 'Matricula finding failed',
                error: { message: 'No exists Matricula' }
            });
        }

        res.status(200).json({
            message: 'Successfully retreved Matricula',
            obj: all_matricula
        });
    });
});

router.get('/all_user', function (req, res, next) {
    User.find().exec(function (err, all_users) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!all_users) {
            return res.status(401).json({
                title: 'Users finding failed',
                error: { message: 'No exists User' }
            });
        }

        res.status(200).json({
            message: 'Successfully retreved User',
            obj: all_users
        });
    });
});

router.patch('/update', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, editUser) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!editUser) {
            return res.status(500).json({
                title: 'No User Found',
                error: { message: 'User not found' }
            });
        }
        editUser.fullName = req.body.fullName;
        editUser.userNumero = req.body.userNumero;
        editUser.userCurso = req.body.userCurso;
        editUser.userNif = req.body.userNif;
        editUser.senhas1 = req.body.senhas1;
        editUser.senhas2 = req.body.senhas2;
        editUser.senhas3 = req.body.senhas3;
        editUser.senhas4 = req.body.senhas4;
        editUser.senhas5 = req.body.senhas5;
        editUser.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated User',
                obj: result
            });
        });
    });
});

router.patch('/update_matricula', function (req, res, next) {
    Matricula.findOne({ id_user: req.body.id_user, anoLectivo:req.body.anoLectivo}, function (err, editMatricula) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!editMatricula) {
            return res.status(500).json({
                title: 'Matricula not Found',
                error: { message: 'Matricula not found' }
            });
        }
        editMatricula.validade = req.body.validade;

        editMatricula.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated Matricula',
                obj: result
            });
        });
    });
});

router.get('/all_unidades', function (req, res, next) {
    Unidade.find().exec(function (err, all_unidades) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!all_unidades) {
            return res.status(401).json({
                title: 'Unidaees finding failed',
                error: {
                    message: 'No exists Unidades'
                }
            });
        }

        res.status(200).json({
            message: 'Successfully retreved Unidades',
            obj: all_unidades
        });
    });
});


module.exports = router;
