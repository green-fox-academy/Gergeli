import { test } from 'tape';
import { Sum } from './sum';

test('Sum the list elements', t => {
  let s = new Sum();

  t.equal(s.getSum([1, 2, 3]), 6);
  t.equal(s.getSum([]), 0);
  t.equal(s.getSum([1]), 1);
  t.equal(s.getSum([null]), 0);
  //t.equal(s.getSum(['srt']), 0);
  t.end();
}); 
