import { test } from 'Tape';
import { Fibonacci } from './fibonacci';

let fibo = new Fibonacci();

test('Fibonacci elements!', t => {
  t.equal(fibo.fibo(13), 7);
  t.equal(fibo.fibo(8), 6);
  t.equal(fibo.fibo(1597), 17);
  t.end();
});