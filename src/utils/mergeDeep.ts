const isObject = (item: Record<string, unknown>): boolean => {
  return (
    item &&
    typeof item === "object" &&
    !Array.isArray(item) &&
    item.constructor.name === "Object"
  );
};

// Deep merge two or more objects together
// Link: https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
export const mergeDeep = (
  target: Record<string, any>,
  ...sources: Record<string, any>[]
): Record<string, any> => {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source as Record<string, unknown>)) {
    for (const key in source) {
      if (isObject(source[key])) {
        // if value of key in source is object, copy with call to mergeDeep
        if (!target[key]) {
          Object.assign(target, {
            [key]: {},
          });
        }
        mergeDeep(target[key], source[key]);
      } else {
        // if value is a non-object, copy the value to target
        Object.assign(target, {
          [key]: source[key],
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
};
