import * as blah from './index.js';


var th = blah.default.reduce((a, c) => {
  return [...a, ...(c.collections.reduce((f, v) => [...f, v.items], []))];
}, []);

console.log(th);
