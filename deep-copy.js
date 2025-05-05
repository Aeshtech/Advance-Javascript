function deepClone(data) {
  if (Array.isArray(data)) {
    return data.map(deepClone);
  } else if (data !== null && typeof data === 'object') {
    // firstly in parenthesis Object.enitries will run and give key value pair of array
    // the mapping over Key-Value and returning array of Key and result of deepclone on value
    // and then finally convert returned key-value pairs of array into and arrya of objects
    return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, deepClone(v)]));
  }
  return data; // primitive
}

//OR

function deepClone(data) {
  if (Array.isArray(data)) {
    return data.map(deepClone);
  } else if (data !== null && typeof data === 'object') {
    const result = {};
    for (const key in data) {
      result[key] = deepClone(data[key]);
    }
    return result;
  }
  return data; // primitive
}
