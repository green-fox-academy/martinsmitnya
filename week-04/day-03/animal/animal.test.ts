'use strict'
import * as test from 'tape';
import { Animal } from '../../../week-03/day-03/animal';




test('testing drink, eat and play functions', t => {
  let lion1 = new Animal();
  let lion2 = new Animal();
  lion1.drink();
  lion1.eat();
  lion1.play();
  let actual = lion1;
  let expected = lion2;

  t.deepEqual(actual, expected);
  t.end();
});