'use strict'
import * as test from 'tape';
import { Sharpie } from '../../../week-03/day-03/sharpie';

let pen = new Sharpie('red', 1.1);
pen.inkLeft;



test('testing Sharpei object', t => {
  let pen = new Sharpie('red', 1.1);
  let actual:number = pen.inkLeft;
  let expected:number = 100;

  t.equal(actual, expected);
  t.end();
});