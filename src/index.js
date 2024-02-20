import path from 'path';
import parse from './parser.js';
import buildDiffTree from './buildDiffTree.js';
import toFormat from './formatters/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const getExtension = (filepath) => path.extname(filepath).slice(1);

export default (filePath1, filePath2, format = 'stylish') => {
  const path1 = getAbsolutePath(filePath1);
  const path2 = getAbsolutePath(filePath2);
  const extname1 = getExtension(path1);
  const extname2 = getExtension(path2);
  const data1 = parse(path1, extname1);
  const data2 = parse(path2, extname2);
  const diffTree = buildDiffTree(data1, data2);
  return toFormat(diffTree, format);
};
