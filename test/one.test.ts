import Cache from 'file-system-cache';
import { expect, test } from 'vitest';

const cache = Cache();
const foo = (await cache.get('foo')) as { foo: string };

test('foo', () => {
  expect(foo).toEqual({ foo: 'bar' });
});

test('bar', () => {
  expect(true).toEqual(true);
});
