import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const cases = [
  {
    f1: 'example1.json',
    f2: 'example2.json',
    exp: 'stylish_recursive.txt',
    title: 'to default format, files json',
  },
  {
    f1: 'example1.yml',
    f2: 'example2.yml',
    exp: 'stylish_recursive.txt',
    title: 'to default format, files yml',
  },
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

test.each(cases)('TEST: $title', ({
  f1, f2, exp, format,
}) => {
  const actual = genDiff(fixturePath(f1), fixturePath(f2), format);
  const expected = getFixture(exp);

  expect(actual).toBe(expected);
});
