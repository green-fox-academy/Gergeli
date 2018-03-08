import { test } from 'tape';
import { getApple } from './apple'; 

test('test the output', t => {
  const ret: string = getApple();
  t.equal(ret, 'apple');
  t.end();
});