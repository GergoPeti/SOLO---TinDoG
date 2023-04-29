'use strict';

import dogs from './data.js';
import Dog from './Dog.js';

const rex = new Dog(dogs[0]);

console.log(rex.name, rex.age);
