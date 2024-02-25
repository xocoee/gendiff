import yaml from 'js-yaml';

const parse = (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return yaml.load(fileContent, 'utf8');
    default:
      throw new Error(`File format not supported: ${format}`);
  }
};

export default parse;
