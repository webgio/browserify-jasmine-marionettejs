var marionette = require('backbone.marionette')
var HomeRouter = marionette.AppRouter.extend({
  appRoutes: {
    "": "showHome",
    "/": "showHome"
  }
});
module.exports = HomeRouter
