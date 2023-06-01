console.log('this is a js file that imports and uses the functions and values from library')

const mod1 = require('./user_defined_module1'); // this commands also runs any function call / console in the module file

console.log(' the module imported containes =>   ',mod1);

console.log(mod1.SF_bridge);

console.log(mod1.average([2, -3.2, -8, 9, 11.11]));