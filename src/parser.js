import yaml from 'js-yaml';

const parse = (filepath, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(filepath);
    case 'yml':
    case 'yaml':
      return yaml.load(filepath, 'utf8');
    default:
      throw new Error(`File format not supported: ${format}`);
  }
};

export default parse;
