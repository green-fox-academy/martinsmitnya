'use strict'
import * as test from 'tape';
import { fibonacciSequence } from './fibonacci';

test('Fibonacci sequence test', t => {
  let actual:number = fibonacciSequence(10);
  let expected:number = 55;

  t.equal(actual, expected);
  t.end();

});
