const tap = require('tap');
const Bluebird = require('bluebird');
const on = require('../lib/await-on');
const ANSWER = 42;
const ERROR = new Error('Need more time to figure that out');

let waitOne = (answer = ANSWER, PromiseConstructor = Promise) => new PromiseConstructor(resolve => setTimeout(() => resolve(answer), 10));
let waitOneAndThrow = () => waitOne().then(res => Promise.reject(ERROR));

tap.test("on", async function (t) {
  t.plan(2);

  const [err,res] = await on(waitOne());

  t.notOk(err);
  t.equal(res,ANSWER);
});

tap.test("on thenable", async function (t) {
  t.plan(2);

  const [err,res] = await on(waitOne(ANSWER, Bluebird));

  t.notOk(err);
  t.equal(res,ANSWER);
});

tap.test("handling errors", async function (t) {
  t.plan(2);

  const [err,res] = await on(waitOneAndThrow());

  t.equal(err,ERROR);
  t.notOk(res);
});

tap.test("fuzzy type passthrough", async function (t) {
  t.plan(2);

  const [err,res] = await on(ANSWER);

  t.notOk(err);
  t.equal(res,ANSWER);
});
