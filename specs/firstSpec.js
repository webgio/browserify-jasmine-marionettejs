var HomeLayout = require('../client/homeLayout')
describe("Home Layout", function() {
  var sut;

  beforeEach(function() {
    sut = new HomeLayout()
    sut.render();
  });

  it("should show a welcome message", function() {

    expect(sut.el).toContain('#welcome')

  });


})
