const pipe = (fn, ...fns) => 
    (...args) => fns.reduce((acc, fn) => fn(acc), fn(...args));

const thread  =  (thing, ...fns) => 
    pipe(...fns).apply(null, (thing))

module.exports = thread
