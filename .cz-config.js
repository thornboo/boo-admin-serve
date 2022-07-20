module.exports = {
  // 可选类型
  types: [
    {
      value: ':tada: init',
      name: '初始化:            项目初始化'
    },
    {
      value: ':sparkles: feat',
      name: '新功能:            引入一个新功能'
    },
    {
      value: ':art:feat',
      name: '改进代码:          改进代码的结构/格式'
    },
    {
      value: ':bug: fix',
      name: '修复:             修复问题/Bug'
    },
    {
      value: ':adhesive_bandage: simpleRepair',
      name: '简单修复:          对非关键问题的简单修复'
    },
    {
      value: ':ambulance: patch',
      name: '补丁:             关键修补程序'
    },
    {
      value: ':fire: delete',
      name: '删除代码:          删除代码或文件'
    },
    {
      value: ':wastebasket: clean',
      name: '清理:             弃用需要清理的代码'
    },
    {
      value: ':memo: docs',
      name: '文档:             添加或更新文档'
    },
    {
      value: ':bulb: explain',
      name: '注释:             在源代码中添加或更新注释'
    },
    {
      value: ':speech_balloon: text',
      name: '添加或更新文本和文字'
    },
    {
      value: ':lipstick: style',
      name: '代码风格:          添加或更新UI和样式文件（不影响代码运行）'
    },
    {
      value: ':recycle: refactor',
      name: '代码重构:          代码重构，注意和特性、修复区分开'
    },
    {
      value: ':recycle: deploy',
      name: '部署:             部署项目'
    },
    {
      value: ':zap: perf',
      name: '性能:             优化代码/提升性能'
    },
    {
      value: ':white_check_mark: test',
      name: '测试:             添加、更新或通过测试'
    },
    {
      value: ':wrench: chore',
      name: '杂项:             依赖更新/脚手架配置修改'
    },
    {
      value: ':arrow_down: relyDown',
      name: '降低依赖项'
    },
    {
      value: ':arrow_up: relyUp',
      name: '升级依赖项'
    },
    {
      value: ':pushpin: fixed',
      name: '依赖固定:          将依赖项固定到特定版本'
    },
    {
      value: ':heavy_plus_sign: addRely',
      name: '添加依赖项'
    },
    {
      value: ':heavy_minus_sign: delRely',
      name: '删除依赖项'
    },
    {
      value: ':hammer: build',
      name: '构建:             添加或更新开发脚本'
    },
    {
      value: ':package: package',
      name: '更新包:            添加或更新已编译的文件或包'
    },
    {
      value: ':rewind: revert',
      name: '回退:             撤销修改（回退到上一个版本）'
    },
    {
      value: ':twisted_rightwards_arrows: merge',
      name: '合并:             代码合并'
    },
    {
      value: ':construction: wip',
      name: '开发中:            项目正在进行中'
    },
    {
      value: ':rewind: workflow',
      name: '工作流:            工作流改进'
    },
    {
      value: ':lock: security',
      name: '修复安全:          修复安全问题'
    },
    {
      value: ':closed_lock_with_key: confidential',
      name: '机密:             添加或更新机密'
    },
    {
      value: ':bookmark: releases',
      name: '发布版本:          发布/版本标签'
    },
    {
      value: ':rotating_light: warning',
      name: '警告:             修复编译器/linter 警告'
    },
    {
      value: ':green_heart: CI',
      name: 'CI构建:           修复CI构建'
    },
    {
      value: ':construction_worker: updateCI',
      name: '更新CI:           添加或更新 CI 构建系统'
    },
    {
      value: ':chart_with_upwards_trend: analysis',
      name: '分析代码:          添加或更新分析或跟踪代码'
    },
    {
      value: ':globe_with_meridians: internation',
      name: '国际化:            国际化和本地化'
    },
    {
      value: ':pencil2: fixTypos',
      name: '修正错别'
    },
    {
      value: ':poop: optCode',
      name: '代码优化:          编写需要改进的糟糕代码'
    },
    {
      value: ':alien: apiUpdate',
      name: 'API更新:          由于外部 API 更改而更新代码'
    },
    {
      value: ':truck: move',
      name: '移动:             移动或重命名资源（例如：文件、路径、路由）'
    },
    {
      value: ':page_facing_up: license',
      name: '许可证:            添加或更新许可证'
    },
    {
      value: ':boom: majorChanges',
      name: '引入重大更改'
    },
    {
      value: ':bento: asset',
      name: '添加或更新资产'
    },
    {
      value: ':wheelchair: access',
      name: '提高可访问性'
    },
    {
      value: ':card_file_box: database',
      name: '数据库:            执行与数据库相关的更改'
    },
    {
      value: ':loud_sound: addLog',
      name: '添加或更新日志'
    },
    {
      value: ':mute: deleteLog',
      name: '删除日志'
    },
    {
      value: ':busts_in_silhouette: contributor',
      name: '成员:             添加或更新贡献者'
    },
    {
      value: ':building_construction: architectural',
      name: '架构:             进行架构更改'
    },
    {
      value: ':iphone: responsive',
      name: '响应式:            兼容响应式设计'
    },
    {
      value: ':see_no_evil: gitignore',
      name: '忽略:             添加或更新.gitignore文件'
    },
    {
      value: ':mag: search',
      name: '搜索优化:          改善搜索引擎优化'
    },
    {
      value: ':label: label',
      name: '添加或更新类型'
    },
    {
      value: ':passport_control: permissions',
      name: '权限:             处理与授权、角色和权限相关的代码'
    },
    {
      value: ':necktie: businessLogic',
      name: '业务更新:          添加或更新业务逻辑'
    },
    {
      value: ':stethoscope: check',
      name: '代码审查:          添加或更新健康检查'
    },
    {
      value: ':bricks: basis',
      name: '基础更改:          基础设施相关的变化'
    },
    {
      value: ':technologist: developers',
      name: '提升开发者体验'
    },
    {
      value: ':money_with_wings: sponsorship',
      name: '赞助:             添加赞助或与金钱相关的基础设施'
    }
  ],
  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['views', '视图层'],
    ['components', '组件相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['config', '配置相关'],
    ['other', '其他修改'],
    ['custom', '以上都不是？我要自定义']
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。
    // 也可以不设置此项，把后面的 allowCustomScopes 设置为 true
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),

  // 步骤消息提示
  messages: {
    type: '请选择你要提交的类型：\n',
    scope: '选择一个 scope（可选）：',
    customScope: '请输入修改范围（可选）：',
    subject: '请输入变更短描述（必填）：',
    body: '更加详细的变更详细描述（可选）：',
    footer: '请输入要关闭的 ISSUES （可选）：',
    confirmCommit: '确认提交？'
  },
  // 允许自定义范围
  allowCustomScopes: true,
  // 要跳过的问题
  skipQuestions: [],

  // subject文字默认值是72
  subjectLimit: 72
}