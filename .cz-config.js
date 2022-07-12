module.exports = {
  // 可选类型
  types: [
    {
      value: ':sparkles:feat',
      name: '特性:    一个新的特性'
    },
    {
      value: ':bug:fix',
      name: '修复:    修复一个Bug'
    },
    {
      value: ':pencil:docs',
      name: '文档:    变更的只有文档'
    },
    {
      value: ':lipstick:style',
      name: '格式:    空格, 分号等格式修复'
    },
    {
      value: ':recycle:refactor',
      name: '重构:    代码重构，注意和特性、修复区分开'
    },
    {
      value: ':zap:perf',
      name: '性能:    提升性能'
    },
    {
      value: ':white_check_mark:test',
      name: '测试:    添加一个测试'
    },
    {
      value: ':hammer:chore',
      name: '工具:    开发工具变动(构建、脚手架工具等)'
    },
    {
      value: ':rewind:revert',
      name: '回滚:    代码回退'
    }
  ],
  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['element-ui', '对 element-ui 的调整'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['config', '配置相关'],
    ['other', '其他修改'],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。
    // 也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 步骤消息提示
  messages: {
    type: '选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    customScope: '请输入修改范围（可选）：',
    subject: '请输入变更短描述（必填）：',
    body: '更加详细的变更描述（可选）：',
    footer: '请输入要关闭的 ISSUES （可选）：',
    confirmCommit: '确认提交？'
  },
  // 允许自定义范围
  allowCustomScopes: true,
  // 要跳过的问题
  skipQuestions: ['footer'],

  // subject文字默认值是72
  subjectLimit: 72
}
