'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/peraturan')
        .get(todoList.peraturan);
    
    app.route('/peraturan/:id')
        .get(todoList.findPeraturan);

    app.route('/rambu')
        .get(todoList.rambu);
    
    app.route('/rambu/:no_rambu')
        .get(todoList.findRambu);
    
    app.route('/cctv')
        .get(todoList.cctv);
    
    app.route('/cctv/:urutan_camera')
        .get(todoList.findCctv);
};
