import { test, expect, describe } from '@jest/globals';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const testList = [
  'yml',
  'json',
];

const cases = [
  {
    f1: 'example1.json',
    f2: 'example2.json',
    exp: 'stylish_recursive.txt',
    format: 'stylish',
    title: 'to stylish from json json',
  },
  {
    f1: 'example1.yml',
    f2: 'example2.yml',
    exp: 'stylish_recursive.txt',
    format: 'stylish',
    title: 'to stylish from yml yml',
  },
  {
    f1: 'example1.json',
    f2: 'example2.json',
    exp: 'plain.txt',
    format: 'plain',
    title: 'to plain from json json',
  },
  {
    f1: 'example1.yml',
    f2: 'example2.yml',
    exp: 'plain.txt',
    format: 'plain',
    title: 'to plain from yml yml',
  },
  {
    f1: 'example1.json',
    f2: 'example2.json',
    exp: 'json.txt',
    format: 'json',
    title: 'to json from json json',
  },
  {
    f1: 'example1.yml',
    f2: 'example2.yml',
    exp: 'json.txt',
    format: 'json',
    title: 'to json from yml yml',
  },
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const getFixture = (filename) => readFileSync(fixturePath(filename), 'utf8').trim();

test.each(testList)('TEST: to format %s', (format) => {
  const filepath1 = fixturePath(`example1.${format}`);
  const filepath2 = fixturePath(`example2.${format}`);

  expect(genDiff(filepath1, filepath2)).toEqual(getFixture('stylish_recursive.txt'));
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(getFixture('stylish_recursive.txt'));
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(getFixture('plain.txt'));
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(getFixture('json.txt'));
});

test.each(cases)('TEST: $title', ({
  f1, f2, exp, format,
}) => {
  const actual = genDiff(fixturePath(f1), fixturePath(f2), format);
  const expected = getFixture(exp);
  expect(actual).toBe(expected);
});
