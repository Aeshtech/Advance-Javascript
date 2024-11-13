if (typeof Object.assign !== 'function') {
  Object.assign = function(target, ...sources) {
    // Step 1: Ensure `target` is an object
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    // Step 2: Turn `target` into an object (in case it's not)
    let to = Object(target);

    // Step 3: Loop over each source object in `sources`
    sources.forEach(source => {
      // Make sure `source` isn't null or undefined
      if (source != null) {
        // Step 4: Copy each property from `source` to `to`
        for (let key in source) {
          // Only copy the property if it actually exists on the `source` object
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    });

    // Step 5: Return the modified `target` object
    return to;
  };
}
