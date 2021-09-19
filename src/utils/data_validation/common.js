function isNullish(value) {
  return [undefined, null].includes(value);
}

function isValidValue(value) {
  return !isNullish(value);
}

function isNonEmptyObject(value) {
  return isValidValue(value) && typeof value === 'object' && Object.keys(value).length > 0;
}

export { isNullish, isValidValue, isNonEmptyObject };
