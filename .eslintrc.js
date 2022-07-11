module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true
  },
  // 此项是用来配置标准的js风格
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // rules是用来设置从插件来的规范代码的规则
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  //"error" -> 2 开启错误规则
  rules: {
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
    // 严格的检查缩进问题
    'indent': 0,
    // 函数前左括号没有空格
    'space-before-function-paren': 0,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true
      }
    ]
  }
};