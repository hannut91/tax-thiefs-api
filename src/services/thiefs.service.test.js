import { getThiefs } from './thiefs.service';

test('getThiefs', async () => {
  const thiefs = await getThiefs(1);

  expect(thiefs.length > 0).toBe(true);
});
