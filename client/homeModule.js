var _ = require('underscore')
var backbone = require('./backbone')
var marionette = require('backbone.marionette')
var HomeLayout = require('./homeLayout')
var HomeRouter = require('./homeRouter')
var HomeController = require('./homeController')
var HomeModule = function(options){
  this.name = 'HomeModule'
  this.region = options.region
}
_.extend(HomeModule.prototype, backbone.Events, {
  start: function(){
    console.log('starting home module')
    this.layout = new HomeLayout()
    this.controller = new HomeController({
      region: this.region,
      layout: this.layout
    })
    this.router = new HomeRouter({
      controller: this.controller
    })
    this.listenTo(this.router, 'all', function(){
      console.log(arguments)
    })
  }
})
module.exports = HomeModule
