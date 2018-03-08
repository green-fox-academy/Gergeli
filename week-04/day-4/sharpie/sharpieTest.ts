import { test } from 'Tape';
import { Sharpie } from './sharpie'

test('Sharpie medod test!', t => {
let sharp = new Sharpie('red', 200);
  t.equal(sharp.getInkamount(), 100);
  sharp.use(1)
  t.equal(sharp.getInkamount(), 99);

  t.end();
});