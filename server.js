var express = require('express');
var path = require('path');
var app = express();

app.configure( function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.listen(app.get('port'), function () { console.log("Express server listening on port " + app.get('port')); });