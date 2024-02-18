import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const parse = (filepath, formats) => {
  switch (formats) {
    case '.json':
      return JSON.parse(readFileSync(filepath, 'utf8'));
    case '.yml':
    case '.yaml':
      return yaml.load(readFileSync(filepath, 'utf8'));
    default:
      throw new Error('This format do not support!');
  }
};

export default parse;
