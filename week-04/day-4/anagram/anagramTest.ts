import { test } from 'Tape';
import { Anagram } from './anagram';

test('Anagram test!', t => {
  let ana = new Anagram();

  t.equal(ana.anagram('abcd', 'cdba'), true);
  t.equal(ana.anagram('abcd', 'cba'), false);
  t.equal(ana.anagram('abcd', 'hrfd'), false);
  t.end();
}) 