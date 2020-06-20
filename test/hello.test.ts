import hello from '../src/hello';

test('hello function test', () => {
  expect(hello('World')).toEqual('Hello, World!');
});
