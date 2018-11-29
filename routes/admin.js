var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Admin = require('../models/admin');
var Senha = require('../models/senha');

router.post('/', function (req, res, next) {
        var admin = new Admin({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                fullName: req.body.fullName
        });
        admin.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
            res.status(201).json({
                message: 'Admin created',
                obj: result
                });
        });

});

//signin admin
router.post('/signin', function (req, res, next) {
    Admin.findOne({email: req.body.email}, function (err, admin) {
        if (err) {
            return res.status(500).json({
                    title: 'An error occurred',
                    error: err
             });
        }
        if (!admin) {
            return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, admin.password)) {
             return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
        }

        var token = jwt.sign({admin: admin}, 'secret', {expiresIn: 7200});
        res.status(200).json({
                message: 'Successfully logged in',
                tokenadmin: token,
                adminId: admin._id });
    });
});

router.get('/getSenha', function (req, res, next) {
    Senha.findOne({}, function (err, senha) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!senha) {
            return res.status(401).json({
                title: 'No senha available',
                error: { message: 'No senha available' }
            });
        }
        res.status(200).json({
            message: 'Successfully retreved Senha',
            obj: senha
        });
    });
});

router.patch('/updateSenha', function (req, res, next) {
    Senha.findOne({}, function (err, editSenha) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!editSenha) {
            return res.status(500).json({
                title: 'No User Found',
                error: { message: 'User not found' }
            });
        }
        editSenha.licenciatura = req.body.licenciatura;
        editSenha.mestrado = req.body.mestrado;
        editSenha.secretaria = req.body.secretaria;
        editSenha.pagamentoPropinas = req.body.pagamentoPropinas;
        editSenha.tesouraria = req.body.tesouraria;
        console.log("Update done");
        editSenha.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated Senha',
                obj: result
            });
        });
        console.log("Update Finish");
    });
});

module.exports = router;
