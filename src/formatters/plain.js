import _ from 'lodash';

const stringify = (node) => {
  if (typeof node === 'string') {
    return `'${node}'`;
  }
  if (_.isPlainObject(node)) {
    return '[complex value]';
  }
  return node;
};

const plain = (diffTree) => {
  const iter = (node, path = '') => {
    const strings = node.map((prop) => {
      const {
        key, status, value, previous, current, children,
      } = prop;
      const currentPath = [path, key].join('.');
      switch (status) {
        case 'removed':
          return `Property '${currentPath.substring(1)}' was removed`;
        case 'added':
          return `Property '${currentPath.substring(1)}' was added with value: ${stringify(value)}`;
        case 'updated':
          return `Property '${currentPath.substring(1)}' was updated. From ${stringify(previous)} to ${stringify(current)}`;
        case 'nested':
          return iter(children, currentPath);
        default:
          return '';
      }
    });
    return strings.filter(Boolean).join('\n');
  };
  return iter(diffTree);
};

export default plain;
