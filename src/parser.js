import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const parse = (filepath, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(readFileSync(filepath, 'utf8'));
    case 'yml':
    case 'yaml':
      return yaml.load(readFileSync(filepath, 'utf8'));
    default:
      throw new Error(`File format not supported: ${format}`);
  }
};

export default parse;
