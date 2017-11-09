## Concept
A function for composing, inspired by Clojure's thread macro.

## Usage


```
//trd :: [arguments_of_the_first_function] -> ((* -> *), ...(*->n)) -> n 
const trd = require('trd')

 trd([5], 
    (x => x - 1), 
    (x => x * 2))//8
```