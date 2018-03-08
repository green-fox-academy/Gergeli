import { test } from 'tape';
import { Sum } from './sum';

test('Sum the list elements', t => {
  let s = new Sum();
  let testArray: number[] = [1, 2, 3];
  

  t.equal(s.getSum(testArray), 6);
  t.end();
}); 
