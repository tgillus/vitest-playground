import Cache from 'file-system-cache';

const cache = Cache();

export async function setup() {
  await cache.set('foo', { foo: 'bar' });
}

export async function teardown() {
  await cache.clear();
}
