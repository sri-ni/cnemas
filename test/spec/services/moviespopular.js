'use strict';

describe('Service: moviesPopular', function () {

  // load the service's module
  beforeEach(module('cnemasApp'));

  // instantiate service
  var moviesPopular;
  beforeEach(inject(function (_moviesPopular_) {
    moviesPopular = _moviesPopular_;
  }));

  it('should do something', function () {
    expect(!!moviesPopular).toBe(true);
  });

});
