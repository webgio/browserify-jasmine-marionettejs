var marionette = require('backbone.marionette');
var mytemplate = require("./mainLayout.hbs");
var Layout = marionette.Layout.extend({
  template: function (data) {
    return mytemplate(data);
  },
  regions: {
    content: "#content"
  }
});
module.exports = Layout;
