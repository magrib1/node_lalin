'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/peraturan')
        .get(todoList.peraturan);

    app.route('/rambu')
    .get(todoList.rambu);
    
    app.route('/cctv')
    .get(todoList.cctv);
};
