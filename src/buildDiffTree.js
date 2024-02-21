import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const keys = _.sortBy(_.union([...Object.keys(data1), ...Object.keys(data2)]));
  const result = keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, action: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, action: 'removed', value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, action: 'nested', children: buildDiffTree(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        action: 'updated',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    return { key, action: 'unmodified', value: data1[key] };
  });
  return result;
};

export default buildDiffTree;
