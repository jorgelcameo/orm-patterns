import * as dataMapper from './dataMapperPattern.js';
import * as repository from './repositoryPattern.js';
import * as activeRecord from './activeRecordPattern.js';

export const patternsCollection = [
  {
    module: dataMapper,
    name: 'Data Mapper',
  },
  {
    module: repository,
    name: 'Repository',
  },
  {
    module: activeRecord,
    name: 'Active Record',
  },
];
