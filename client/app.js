var backbone = require('backbone');
var marionette = require('backbone.marionette');
var HomeModule = require('./homeModule')
var App = function() {
  this.message = 'Hi out there!';
}
App.prototype.start = function() {
    console.log(this.message);
    var homeModule = new HomeModule({
      region: new marionette.Region({
        el: '#main'
      })
    })
    homeModule.start()
    backbone.history.start()
  }
module.exports = App;
