import {patternsCollection} from './patterns/index.js';

patternsCollection.forEach(({module, name}) => {
  console.log(name);
  module.run();
  console.log('---------------------------------');
});
