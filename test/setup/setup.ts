import { afterAll, beforeAll } from 'vitest';

beforeAll(() => {
  global.foo = { foo: 'bar' };
});

beforeAll(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 100);
  });
});

afterAll(() => {
  delete global.foo;
});

afterAll(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 200);
  });
});
