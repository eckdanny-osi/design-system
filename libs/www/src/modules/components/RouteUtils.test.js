import { getTrail, getSiblingRoutes } from './RouteUtils';

describe('getTrail', () => {
  it.skip('joins partials', () => {
    let trail = [
      { path: '/foo', title: 'Foo' },
      { path: '/bar', title: 'Bar' },
      { path: '/quo', title: 'Quo' },
    ];
    expect(getTrail(trail)).toEqual([
      { path: '/foo', title: 'Foo' },
      { path: '/foo/bar', title: 'Bar' },
      { path: '/foo/bar/quo', title: 'Quo' },
    ]);
  });
});

describe('getSiblingContext', () => {
  it('returns the children from the nearest parentContext', () => {
    const parentContext = [
      { title: 'Foo', path: '/foo', children: [] },
      {
        title: 'Bar',
        path: '/bar',
        children: [
          { title: 'Quo', path: '/quo' },
          { title: 'Qux', path: '/qux' },
        ],
      },
    ];
    expect(getSiblingRoutes(parentContext)).toEqual([
      { title: 'Quo', path: '/quo' },
      { title: 'Qux', path: '/qux' },
    ]);
  });

  it('throws when no parentContext', () => {
    expect(() => getSiblingRoutes([])).toThrow();
  });
});
