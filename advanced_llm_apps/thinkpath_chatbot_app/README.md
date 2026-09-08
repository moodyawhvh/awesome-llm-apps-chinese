> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。
>
> 📝 注:本文件超过 10000 字符,仅翻译核心章节;"未来开发""潜在应用""参与贡献""致谢"等章节请参阅英文原版。

# ThinkPath 聊天机器人 🧠
*集成本地 LLM 的策略思考助手*
*引导式回复聊天机器人*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Electron](https://img.shields.io/badge/Electron-27+-blue.svg)](https://electronjs.org/)
[![Ollama](https://img.shields.io/badge/Ollama-Compatible-orange.svg)](https://ollama.ai/)

> **别再过度生成了。开始有策略地思考。**

ThinkPath AI 通过引入**引导式思考路径**,革新了你与大语言模型的交互方式——让你逐步精确控制 AI 对任意话题挖多深。

<video width="100%" controls>
  <source src="https://github.com/Ahmed-G-ElTaher/ThinkPath-Chatbot/blob/main/github%20thinkpath%20video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 🎯 **我们解决的问题**

### 用 ThinkPath AI 之前:
- ❌ **Token 浪费**:你只想要部分分析,AI 却生成了完整回复
- ❌ **信息过载**:被一堆你没问的细节淹没
- ❌ **无法控制**:不能在 AI 思考中途暂停、换方向探索
- ❌ **线性思维**:被锁死在一种思路里,难以切换视角
- ❌ **成本高企**:为你不需要也不想要的 token 买单

### 用 ThinkPath AI 之后:
- ✅ **精确控制**:要多深的分析就给多深
- ✅ **成本高效**:只为你选择的思考步骤付费
- ✅ **策略灵活**:在不同思路之间动态切换
- ✅ **增量探索**:一步步建立理解
- ✅ **完全隐私**:一切都在本机运行

## 🚀 **核心特性**

### 🧭 **引导式思考路径**
- **动态路径生成**:AI 为每个问题生成 4 种不同的思考路径
- **分步执行**:点击任意步骤,即执行该路径至该步为止的内容
- **累积逻辑**:第 3 步 = 第 1 + 2 + 3 步一起执行
- **可视化进度**:已完成哪些步骤一目了然

### 🔄 **自适应对话**
- **路径自动更新**:每次回复后生成新的思考路径
- **上下文感知**:路径建立在对话历史之上
- **延续性聚焦**:后续步骤始终贴合当前进度

### 🎨 **专业界面**
- **现代设计**:借鉴专业工具的简洁直观界面
- **窗口控制**:原生最小化、最大化、关闭按钮
- **结构化回复**:粗体、项目符号、专业排版
- **键盘快捷键**:快速导航与控制

### 🔒 **完全隐私**
- **本地处理**:所有 AI 运算经 Ollama 在你机器上完成
- **不共享数据**:对话永远不离开你的电脑
- **可离线**:无需联网即可使用
- **模型自选**:可用任何 Ollama 兼容模型(Llama、Gemma 等)

## 📊 **成本对比**

| 场景 | 传统聊天 | ThinkPath AI | 节省 |
|----------|-----------------|--------------|---------|
| 快速澄清 | 500 tokens | 150 tokens | **70%** |
| 部分分析 | 1200 tokens | 400 tokens | **67%** |
| 方案探索 | 2000 tokens | 600 tokens | **70%** |
| 复杂策略 | 3500 tokens | 1000 tokens | **71%** |

*基于"用户只需要部分分析"的典型使用模式*

## 🛠 **安装**

### 前置条件
- [Node.js](https://nodejs.org/)(v18 或更高)
- 已安装并运行 [Ollama](https://ollama.ai/)
- 至少下载了一个语言模型

### 快速开始

1. **克隆仓库** 并进入目录:
   ```bash
   git clone https://github.com/Ahmed-G-ElTaher/ThinkPath-Chatbot.git
   cd thinkpath-ai
   ```

2. **安装依赖**:
   ```bash
   npm install
   ```

3. **配置 Ollama 并下载模型**
   ```bash
   # 安装 Ollama(如果尚未安装)
   # 访问 https://ollama.ai/download
   
   # 下载一个快速模型
   ollama pull gemma3:1b
   
   # 或一个更强的模型
   ollama pull llama3.1:8b
   ```

4. **配置模型**(如需要)
   ```bash
   # 编辑 main.js 第 45 行,改成你的模型
   model: 'gemma3:1b'  # 改成你偏好的模型
   ```

5. **运行应用**
   ```bash
   npm start
   ```

## 💡 **工作原理**

### 1. **随便问一个问题**
输入问题后,ThinkPath AI 会生成 4 种不同的思考路径:
- 分析型、创意型、实用型、综合型
- 或结合上下文的路径,如"技术深挖""业务影响"等

### 2. **选择路径与步骤**
每条路径有 3 个步骤。点击任意步骤,即执行该路径至该步为止:
- 第 1 步:只执行第一步
- 第 2 步:执行第 1、2 步
- 第 3 步:三步全部执行

### 3. **获得结构化回复**
AI 给出的详细分析包含:
- 清晰的分步拆解
- 加粗的关键术语与概念
- 项目符号提升可读性
- 进度小结

### 4. **继续探索**
每次回复后,新的思考路径会自动出现,并建立在当前对话上下文之上。

## 🎯 **使用场景**

### 💻 **软件开发与调试**
- 以可控的分析深度调试模型
- 用多种技术思路做架构规划
- 聚焦式、分步式的代码评审
- 系统化排查性能问题

### 🤖 **机器学习与 AI**
- 无信息过载地诊断训练问题
- 引导式实验调超参
- 逐步探索模型架构
- 结构化方法调试数据流水线

### 📊 **数据科学**
- 多视角探索性数据分析
- 增量式特征工程
- 复杂度可控的统计分析
- 分步规划可视化方案

### 💼 **技术管理**
- 引导式分析辅助系统架构决策
- 结构化对比评估技术栈
- 聚焦式调查评估技术债
- 用方法论驱动团队解题

## ⚙️ **配置**

### 模型选择
编辑 `main.js` 切换模型:
```javascript
// 第 45 行:修改模型名
model: 'llama3.1:8b'  // 或 'gemma3:1b'、'mistral:7b' 等
```

### UI 定制
修改 `index.html` 的 CSS,可调整:
- 配色方案
- 字体排版
- 布局偏好
- 窗口样式

### 键盘快捷键
- `Ctrl/Cmd + W` - 关闭窗口
- `Ctrl/Cmd + M` - 最小化窗口
- `F11` - 切换最大化
- `Ctrl/Cmd + R` - 刷新思考路径
