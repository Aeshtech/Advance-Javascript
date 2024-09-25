Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = []
    if (!promises.length) {
      resolve(results)
      return
    }
    let pending = promises.length
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then((res) => {
        results[idx] = res
        pending--
        if (pending === 0) {
          resolve(results)
        }
      }, reject)
    })
  })
}
