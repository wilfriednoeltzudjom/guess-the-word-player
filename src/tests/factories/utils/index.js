import { cloneDeep } from '../../../utils/data_processing';

/**
 * update json schema
 * @param {Object} schema
 * @param {Object} options
 * @param {Number} options.count
 * @param {Array} options.skips
 * @returns
 */
export function updateJSONSchema(schema, options = {}) {
  const updateStrategies = {
    count: updateSchemaGeneratedItemsCount,
    skips: removeSkippedPropertiesFromSchema,
  };

  return applyUpdateOnSchemaUsingStrategies(cloneDeep(schema), options, updateStrategies);
}

function applyUpdateOnSchemaUsingStrategies(schema, options, updateStrategies) {
  return Object.keys(options).reduce((updatedSchema, optionName) => {
    return updateStrategies[optionName](updatedSchema, options[optionName]);
  }, schema);
}

function updateSchemaGeneratedItemsCount(schema, count) {
  if (count > 0) {
    schema.minItems = count;
    schema.maxItems = count;
  }

  return schema;
}

function removeSkippedPropertiesFromSchema(schema, skips = []) {
  skips.forEach((property) => {
    delete schema.properties[property];
    if (schema.required) schema.required = schema.required.filter((requiredProperty) => requiredProperty !== property);
  });

  return schema;
}

/**
 * assign items init data
 * @param {Array} array
 * @param {Object} data
 * @param {Object} data.initData
 * @param {Array} data.itemsInitData
 * @returns
 */
export function assignItemsInitData(array = [], data = {}) {
  const { initData = {}, itemsInitData = [] } = data;

  return array.map((item, index) => {
    const itemInitData = Object.assign(initData, itemsInitData[index] || {});

    return Object.assign(item, itemInitData);
  });
}
