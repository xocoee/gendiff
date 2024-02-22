import { readFileSync } from 'fs';
import path from 'path';
import parse from './parser.js';
import buildDiffTree from './buildDiffTree.js';
import toFormat from './formatters/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const getExtension = (filepath) => path.extname(filepath).slice(1);
const getData = (filePath) => parse(readFileSync(filePath, 'utf-8'), getExtension(filePath))

export default (filePath1, filePath2, format = 'stylish') => {
  const path1 = getAbsolutePath(filePath1);
  const path2 = getAbsolutePath(filePath2);
  const data1 = getData(path1);
  const data2 = getData(path2);
  const diffTree = buildDiffTree(data1, data2);
  return toFormat(diffTree, format);
};
