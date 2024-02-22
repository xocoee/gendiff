import _ from 'lodash';

const stringify = (node) => {
  if (typeof node === 'string') {
    return `'${node}'`;
  }
  if (_.isPlainObject(node)) {
    return '[complex value]';
  }
  if (node === null) {
    return 'null';
  }
  return node;
};

const plain = (diffTree) => {
  const iter = (node, path = '') => {
    const strings = node.map((prop) => {
      const currentPath = [path, prop.key].join('.');
      switch (prop.type) {
        case 'removed':
          return `Property '${currentPath.substring(1)}' was removed`;
        case 'added':
          return `Property '${currentPath.substring(1)}' was added with value: ${stringify(prop.value)}`;
        case 'updated':
          return `Property '${currentPath.substring(1)}' was updated. From ${stringify(prop.value1)} to ${stringify(prop.value2)}`;
        case 'nested':
          return iter(prop.children, currentPath);
        case 'unmodified':
          return null;
        default:
          throw new Error(`Unknown property status: ${prop.type}`);
      }
    });
    return strings.filter(Boolean).join('\n');
  };
  return iter(diffTree);
};

export default plain;
