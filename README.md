# 😪 @particle/await-on
![npm](https://img.shields.io/npm/v/@particle/await-on.svg)
![node](https://img.shields.io/node/v/@particle/await-on.svg)
![npm](https://img.shields.io/npm/l/@particle/await-on.svg)
![npm](https://img.shields.io/npm/dt/@particle/await-on.svg)
[![Travis](https://travis-ci.com/particle-iot/await-on.svg?branch=master)](https://travis-ci.com/particle-iot/await-on)
[![Coverage](https://coveralls.io/repos/github/particle-iot/await-on/badge.svg?branch=master)](https://coveralls.io/github/particle-iot/await-on?branch=master)

Really simple error handling with await/async

Forked from [`await-on`](https://github.com/json2d/await-on) by [Jason Yung](https://github.com/json2d), itself inspired by [`await-to-js`](https://github.com/scopsy/await-to-js) whose creator [Dima Grossman](http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/) originally blogged about using destructuring array assignment

## Quick Usage
This package provides a helper for destructuring the results of a Promise:
```javascript
const on = require('@particle/await-on');

const fetchData = () => new Promise(/*...*/);

const [err, data] = await on(fetchData());
if(err) {
	res.send(err);
} else {
	res.send(data);
}
```

The goal is to avoid the built-in approach using the `try`/`catch` block pattern:

```javascript
try {
	const data = await fetchData();
	res.send(data);
} catch(err) {
	res.send(err);
}
```

## Type fuzziness
Non-promises will passthrough same as the behavior of the native `await`

```javascript
const [err, answer] = await on(42); //not a promise but ok no big deal
console.log(answer) //> 42
```

## License
MIT License. See [License](https://github.com/particle-iot/await-on/blob/master/LICENSE) in the repository.
