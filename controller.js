'use strict';

var response = require('./res');
var connection = require('./conn');

exports.peraturan = function(req, res) {
    connection.query('select peraturan.pasal_per as pasal_pernya,peraturan.id as idnya,peraturan.isi as isinya,peraturan.ilustrasi as ilunya,pelanggaran.pasal_pel as pasal_pelnya, pelanggaran.denda as dendanya, pelanggaran.pidana as pidananya from peraturan,pelanggaran where peraturan.pasal_per=pelanggaran.pasal_per;', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findPeraturan = function(req, res) {
    
    var id = req.params.id;

    connection.query('select peraturan.pasal_per as pasal_pernya,peraturan.id as idnya,peraturan.isi as isinya,peraturan.ilustrasi as ilunya,pelanggaran.pasal_pel as pasal_pelnya, pelanggaran.denda as dendanya, pelanggaran.pidana as pidananya from peraturan,pelanggaran where peraturan.pasal_per=pelanggaran.pasal_per and peraturan.id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.rambu = function(req, res) {
    connection.query('select no_rambu as nonya,arti as artinya, jenis as jenisnya, gambar as gambarnya from rambu;', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findRambu = function(req, res) {
    
    var no_rambu = req.params.no_rambu;

    connection.query('select no_rambu as nonya,arti as artinya, jenis as jenisnya, gambar as gambarnya from rambu where no_rambu = ?',
    [ no_rambu ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.cctv = function(req, res) {
    connection.query('select * from cctv;', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findCctv = function(req, res) {
    
    var urutan_camera = req.params.urutan_camera;

    connection.query('SELECT * FROM cctv where urutan_camera = ?',
    [ urutan_camera ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
