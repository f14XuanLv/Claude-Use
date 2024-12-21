export default {
  title: "Anthropic",
  description: "文档站点描述",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],
    
    // 修改大纲配置
    outline: {
      level: [1, 2, 3],  // 显示 h1-h3 级别的标题
      label: '页面导航'   // 可选：修改 "On this page" 的显示文本
    }
  }
}