'use strict';

describe('Service: moviessearch', function () {

  // load the service's module
  beforeEach(module('cnemasApp'));

  // instantiate service
  var moviessearch;
  beforeEach(inject(function (_moviessearch_) {
    moviessearch = _moviessearch_;
  }));

  it('should do something', function () {
    expect(!!moviessearch).toBe(true);
  });

});
