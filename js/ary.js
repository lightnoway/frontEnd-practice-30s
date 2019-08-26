// Creates a function that accepts up to n arguments, ignoring any additional arguments.
function ary(fn,n){
  return function(...args){
    args = args.slice(0,n);
    return fn.apply(this,args);
  }
}
var log3 = ary(console.log,3);
log3(1,2,3,4,5);
/**
 * 答案
 */
const _ary = (fn,n) =>(...args)=> fn(...args.slice(0,n));

/**
 * example
 */
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]