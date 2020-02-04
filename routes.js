'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/peraturan')
        .get(todoList.peraturan);

    app.route('/rambu')
    .get(todoList.rambu);
};