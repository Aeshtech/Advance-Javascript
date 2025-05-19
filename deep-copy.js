function deepCopy(data) {
  if (Array.isArray(data)) {
    return data.map(deepClone);
  } else if (data !== null && typeof data === "object") {
    //collect all [key, deepClone(value)] pairs and convert to object
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, deepClone(v)])
    );
  }
  return data; // primitive
}

//OR

function deepCopy(data) {
  if (Array.isArray(data)) {
    return data.map(deepClone);
  } else if (data !== null && typeof data === "object") {
    const result = {};
    for (const key in data) {
      result[key] = deepClone(data[key]);
    }
    return result;
  }
  return data; // primitive
}
