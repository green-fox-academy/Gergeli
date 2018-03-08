import { test } from 'Tape';
import {  Letters } from './countLetters'

let count = new Letters();

test('Number of the letters!', t => {
  t.equal(count.countletters('ada'), 'a 2, d 1');
  t.equal(count.countletters('bubi'), 'b 2, u 1, i 1');

  t.end();
});