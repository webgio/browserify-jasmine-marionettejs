var marionette = require('backbone.marionette')
var HomeController = marionette.Controller.extend({
  initialize: function(options){
    this.mylayout = options.layout
    this.myregion = options.region
  },
  showHome: function(){
    this.myregion.show(this.mylayout)
  }
})
module.exports = HomeController
