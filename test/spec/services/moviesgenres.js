'use strict';

describe('Service: moviesGenres', function () {

  // load the service's module
  beforeEach(module('cnemasApp'));

  // instantiate service
  var moviesGenres;
  beforeEach(inject(function (_moviesGenres_) {
    moviesGenres = _moviesGenres_;
  }));

  it('should do something', function () {
    expect(!!moviesGenres).toBe(true);
  });

});
