'use strict';

/**
 * Handler which takes a promise and returns array signature with `[err, data]`.
 * @param  {Promise} promise    Promise to handle
 * @return {Array}              Array with signature `[err, data]`
 */
function on(promise) {
  if (promise && typeof promise.then === 'function') {
    return promise.then(data => {
      return [null, data];
    }).catch(err => [err]);

  } else {
    return [null, promise];
  }
}

module.exports = on;
