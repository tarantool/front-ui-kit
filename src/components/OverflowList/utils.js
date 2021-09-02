// @flow

export function shallowCompareKeys(objA, objB, keys) {
  // treat `null` and `undefined` as the same
  if (objA == null && objB == null) {
    return true;
  } else if (objA == null || objB == null) {
    return false;
  } else if (Array.isArray(objA) || Array.isArray(objB)) {
    return false;
  } else if (keys != null) {
    return shallowCompareKeysImpl(objA, objB, keys);
  } else {
    // shallowly compare all keys from both objects
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    return (
      shallowCompareKeysImpl(objA, objB, { include: keysA }) && shallowCompareKeysImpl(objA, objB, { include: keysB })
    );
  }
}

function shallowCompareKeysImpl(objA, objB, keys) {
  return filterKeys(objA, objB, keys).every((key) => {
    return (
      Object.prototype.hasOwnProperty.call(objA, key) === Object.prototype.hasOwnProperty.call(objB, key) &&
      objA[key] === objB[key]
    );
  });
}

function filterKeys(objA, objB, keys) {
  if (isAllowlist(keys)) {
    return keys.include;
  } else if (isDenylist(keys)) {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    // merge keys from both objects into a big set for quick access
    const keySet = arrayToObject(keysA.concat(keysB));

    // delete denied keys from the key set
    keys.exclude.forEach((key) => delete keySet[key]);

    // return the remaining keys as an array
    return Object.keys(keySet);
  }

  return [];
}

function arrayToObject(arr: any[]) {
  return arr.reduce((obj: any, element: any) => {
    obj[element] = true;
    return obj;
  }, {});
}

function isAllowlist(keys) {
  return keys != null && keys.include != null;
}

function isDenylist(keys: any) {
  return keys != null && keys.exclude != null;
}
