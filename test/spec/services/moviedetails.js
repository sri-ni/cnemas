'use strict';

describe('Service: movieDetails', function () {

  // load the service's module
  beforeEach(module('cnemasApp'));

  // instantiate service
  var movieDetails;
  beforeEach(inject(function (_movieDetails_) {
    movieDetails = _movieDetails_;
  }));

  it('should do something', function () {
    expect(!!movieDetails).toBe(true);
  });

});
