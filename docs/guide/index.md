---
title: Claude指南
---

<style>
/* 主标题样式 */
h1 {
  border-bottom: 3px solid #4a5568;
  padding-bottom: 0.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 2.25rem;
  color: #2d3748;
}

/* 二级标题样式 */
h2 {
  border-left: 4px solid #718096;
  padding-left: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #4a5568;
}

/* 三级标题样式 */
h3 {
  position: relative;
  padding-left: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #718096;
}

h3::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #a0aec0;
}

/* 列表项样式 */
ul {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>

# 基础知识

## 多模态
即支持多种输入输出模式，比如文本、图片、文件等。

## Token
Token 是 AI 模型处理语言的基本单位：

- 定义：一个 token 可能是一个完整的单词、单词的一部分、一个汉字等
- 计算方式：在英语中，一个单词通常对应 1-2 个 token；而在中文中，一个汉字通常对应一个 token
- 实际应用：比如 "我爱人工智能" 这句话可能会被分成 ["我", "爱", "人工", "智能"] 这样的 token

token 的数量直接影响模型可以处理的内容长度，也会影响使用成本。

## 上下文

上下文是 AI 模型在对话过程中能够"记住"和参考的信息范围。这个概念可以类比为人类的短期记忆：

- 工作原理：模型会记住对话中之前的内容，并用这些信息来理解当前的对话，做出更合适的回应
- 容量限制：每个模型都有其最大上下文长度，用 token 数量来衡量
- 重要性：
  - 更长的上下文允许模型理解更复杂的任务背景
  - 可以进行更连贯的长对话
  - 能够处理更长的文档和更复杂的分析任务

如果超出上下文限制，模型就会"遗忘"早期的对话内容，就像人类无法永远记住所有的对话细节一样。

理解这些基础概念能够更好地理解模型的能力边界和局限性。

## 输出窗口（Output Window）
输出窗口是指 AI 模型在单次响应中能够生成的最大内容长度。

### 使用建议

- 对于长内容，可以**将任务分解成多个小部分**
- **明确告诉模型您希望它如何组织和分割长内容**
- 在需要时，可以要求模型继续之前未完成的内容

# Claude各模型特性

## haiku
### 3 Haiku
- 最精简的上下文容量
- 可以识别和处理图片内容
- 能够读取 PDF 中的文字
- 无法识别 PDF 中的图片

### 3.5 Haiku 
- 纯文本模型
- 上下文容量比 Claude 3 Haiku 扩大了 2-4 倍
- 不支持多模态功能

## Sonnet
### 3.5 Sonnet 
- 支持完整的多模态能力
- 上下文容量20万token
- **可以识别 PDF 中的文字和图片**
- 在整体智能水平上领先其他版本

## Opus
### 3 Opus 
- 可以识别和处理图片内容
- 能够读取 PDF 中的文字
- 无法识别 PDF 中的图片
- **写作能力上可能超过 3.5 Sonnet**

# Claude基础功能

## 更换Style
Style 功能允许用户定制 Claude 的回复风格和语气：
- 可以选择正式、随意、技术性等不同风格
- 能够适应不同场景的交流需求

在官方提供的Style中，笔者推荐使用 **Explanatory** 和 **Formal** Style。

<img src=".\images\style-switcher.png" alt="Style 切换界面展示" style="width: 400px; margin: 1rem 0; border: 1px solid #e2e8f0; border-radius: 4px;">

- 也可以自定义风格，笔者暂未尝试。

# Claude进阶功能

## 上下文重塑（目前只有下文能重塑）

上下文重塑是一个强大的功能，允许用户：
- 删除**低质量**或者**错误的、不符合要求的**下文信息
- 保留有价值的上文信息
- 优化对话流程和效率，**节省成本**

### 一个例子

<img src=".\images\context-reshaping01.png" alt="上下文重塑功能展示" style="width: 500px; margin: 1rem 0; border: 2px solid #e2e8f0; border-radius: 4px;">

本来笔者打算从 1 2 3 逐步开始提问，但是不小心跳过了 3 先输入了 4，这时候可以通过上下文重塑功能将这条对话的输入改为 3。

---
<img src=".\images\context-reshaping02.png" alt="上下文重塑功能展示" style="width: 500px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

---
修改之后点击 **Save** 即可。
<img src=".\images\context-reshaping03.png" alt="上下文重塑功能展示" style="width: 500px; margin: 1rem 0; border: 2px solid #e2e8f0; border-radius: 4px;">

## Project 功能
Project 功能支持更复杂的任务管理：
- 对**多文件项目支持**更好
- 上传至 Project knowledge 里的内容不会消耗token，**节省成本**
- 上传至 Project knowledge 的 PDF 内的图片无法被识别
- 对于格式是图片但是内容是文字的文件，可以转换为文本再上传
- 在对话过程中也可以额外附上图片，这是可以被模型直接识别的

### 创建 Project

左上角展开侧栏，点击 **Project** 按钮
<img src=".\images\project-demo01.png" alt="Project功能展示" style="width: 1000px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

---
然后右上角点击 **Create Project** 按钮
<img src=".\images\project-demo02.png" alt="Project功能展示" style="width: 800px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

---
输入项目名称和目标，点击 **Create Project** 按钮
<img src=".\images\project-demo03.png" alt="Project功能展示" style="width: 400px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

---
所有说明都在里面了，自己尝试一下吧
<img src=".\images\project-demo04.png" alt="Project功能展示" style="width: 800px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

---

## Artifacts 功能

Artifacts是Claude的一项核心功能,用于生成和管理独立的内容块,如代码、文档、图表等。

### 支持的内容类型

- 代码 (application/vnd.ant.code)
- Markdown文档 (text/markdown) 
- HTML页面 (text/html+css+js)
- SVG图形 (image/svg+xml)
- Mermaid图表 (application/vnd.ant.mermaid)
- React组件 (application/vnd.ant.react)

### 使用场景

- 完整的多文件代码实现
- 长篇文档/报告
- 数据/算法/工作流等可视化

### 如何引导模型使用Artifacts

- 直接告诉模型要使用Artifacts，具体一点**可以指定内容类型**
- 在**需要生成多文件代码**的时候，用**强烈语气**明确告诉模型**要生成多个Artifacts实例**：
<img src=".\images\artifacts-demo01.png" alt="Artifacts功能展示" style="width: 1000px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 4px;">

- 也可以结合具体的文件结构：
```
📂 project/
├── 📂 src/
│   ├── 📄 index.js
│   ├── 📄 styles.css
│   └── 📂 components/
│       ├── 📄 Header.js
│       └── 📄 Footer.js
└── 📄 README.md
```

## MCP（模型上下文协议）
模型上下文协议（Model Context Protocol）是一个重要的概念：
- 定义了模型如何理解和处理上下文
- 确保对话的连贯性和准确性
- 优化上下文利用效率
- 提供更精准的响应

**这是Sonnet写的，笔者还没尝试过，不懂😥**

# Claude使用习惯推荐

## 通过上下文重塑优化对话
- 删除无关对话降低噪音
- 灵活调整对话方向

## project的应用
- 保持知识库文档的清晰度
- 充分利用，节省token

## 及时清理会话
- 完成任务后及时清理不需要的对话
<img src=".\images\clear-dialogue01.png" alt="清理对话示例" style="width: 600px; margin: 1rem 0; border: 2px solid #e2e8f0; border-radius: 4px;">
- 保持对话历史的整洁
- 只保留重要会话

## 不相关内容及时开启新对话
- 避免在同一对话中混杂不相关内容
- 噪音过大会影响模型回复准确性
- 及时开启新对话处理新的任务

## 避免过长对话
- **长对话会加快额度消耗**😭
<img src=".\images\long-dialogue01.png" alt="长对话示例" style="width: 800px; margin: 1rem 0; border: 3px solid #e2e8f0; border-radius: 6px;">
- **超长对话可能导致模型回复不准确**😭
- 可以及时通过上下文重塑去掉低质量的下文对话👍

## 充分利用高级特性
- 灵活运用各种功能组合
- 根据任务特点选择适当的模型
- 善用上下文重塑优化对话质量
- 建立清晰的工作流程和使用习惯

## 训练自己精准表达的能力
- 需求越精准，模型回复越准确👍