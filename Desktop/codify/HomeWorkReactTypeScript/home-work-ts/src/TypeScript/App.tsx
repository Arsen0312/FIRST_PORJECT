import { add, subtract } from './Math';
import type { MathOperation } from './Math'
import { person } from './Person';
import type { Person } from './Person'


console.log('Result of addition:', add(10, 5));
console.log('Result of subtraction:', subtract(10, 5));

console.log('Person information:', person)
