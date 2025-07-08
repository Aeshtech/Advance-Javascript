function deepCopy(data){
  if(Array.isArray(data)){
    return data.map((item)=> deepCopy(item));
  }else if(data !== null && typeof data === 'object'){
    const result = {};
    for(let [key, value] of Object.entries(data)){
      result[key] = deepCopy(value);
    }
    return result;
  }else{
  return data;
  }
}

// ---------------------OR----------------

function deepCopy2(data) {
  if (Array.isArray(data)) {
    return data.map(deepCopy2);
  } else if (data !== null && typeof data === "object") {
    //collect all [key, deepCopy2(value)] pairs and convert to object
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, deepCopy2(v)])
    );
  }
  return data; // primitive
}
