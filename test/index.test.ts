import { expect, test } from 'vitest';

test('something has been added to global by setupFiles entry', async () => {
  // @ts-expect-error type
  const result = foo as { foo: string };

  expect(result).toEqual({ foo: 'bar' });
});
