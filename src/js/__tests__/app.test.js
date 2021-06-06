import demo from '../app';

test('name', () => {
  const value = 'result';
  expect(demo(value)).toBe('result');
});
