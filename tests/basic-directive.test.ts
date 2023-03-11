import 'angular';
import 'angular-mocks';

import TestModule from './app.module';

var angular = window.angular;

describe('Basic Directive', () => {
  beforeEach(angular.mock.module(TestModule));

  // TODO: Add tests
  it('should be true', () => {
    expect(true).toBe(true);
  });
});
