function setGetEnv(fn) {
  _onSetGetEnv();
}
let _onSetGetEnv = () => {
};
function setOnSetGetEnv(fn) {
  _onSetGetEnv = fn;
}

const setup = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  setGetEnv
}, Symbol.toStringTag, { value: 'Module' }));

export { setup as a, setOnSetGetEnv as s };
