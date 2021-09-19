import removeAccents from 'remove-accents';

export function sanitize(value) {
  return value && removeAccents.remove(value).toUpperCase();
}
