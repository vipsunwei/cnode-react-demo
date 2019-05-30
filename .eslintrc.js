module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true,
    React: true,
    _: true,
    $: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 1,
    'no-mixed-spaces-and-tabs': 1,
    // 关闭检查行尾分号
    'semi': 0,
    // 关闭检查全等于
    // 'eqeqeq': 0,
    // 关闭检查eval
    'no-eval': 0
  }
}
