import _ from 'lodash';

const getSpaces = (depth) => '    '.repeat(depth);
const getCloseBracket = (depth) => `${getSpaces(depth - 1)}}`;

const stringify = (node, depth = 1) => {
  const indent = getSpaces(depth);
  if (!_.isPlainObject(node)) {
    return `${node}`;
  }
  const strings = Object.entries(node).map(
    ([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`,
  );
  return ['{', ...strings, getCloseBracket(depth)].join('\n');
};

const stylish = (diffTree) => {
  const iter = (node, depth) => {
    const indent = getSpaces(depth).slice(2);
    const strings = node.map((prop) => {
      switch (prop.action) {
        case 'removed':
          return `${indent}- ${prop.key}: ${stringify(prop.value, depth + 1)}`;
        case 'added':
          return `${indent}+ ${prop.key}: ${stringify(prop.value, depth + 1)}`;
        case 'updated':
          return [`${indent}- ${prop.key}: ${stringify(prop.oldValue, depth + 1)}`,
            `${indent}+ ${prop.key}: ${stringify(prop.newValue, depth + 1)}`].join('\n');
        case 'nested':
          return `${indent}  ${prop.key}: ${iter(prop.children, depth + 1)}`;
        default:
          return `${indent}  ${prop.key}: ${stringify(prop.value, depth + 1)}`;
      }
    });
    return ['{', ...strings, getCloseBracket(depth)].join('\n');
  };
  return iter(diffTree, 1);
};

export default stylish;
