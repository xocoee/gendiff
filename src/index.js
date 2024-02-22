import path from 'path';
import { readFileSync } from 'fs';
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
  const data1 = readFileSync(path1, extname1);
  const data2 = readFileSync(path2, extname2);
  const parsedData1 = parse(data1, extname1);
  const parsedData2 = parse(data2, extname2);
  const diffTree = buildDiffTree(parsedData1, parsedData2);
  return toFormat(diffTree, format);
};
