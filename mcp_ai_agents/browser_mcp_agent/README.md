> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🌐 浏览器 MCP 智能体

https://github.com/user-attachments/assets/a01e09fa-131b-479a-8df3-2d1a61fd80f3

一个 Streamlit 应用,让你通过 Model Context Protocol(MCP)和 [MCP-Agent](https://github.com/lastmile-ai/mcp-agent) 及 Playwright 集成,用自然语言命令浏览网页并与之交互。

## 功能特性

- **自然语言界面**:用简单的英文命令控制浏览器
- **完整的浏览器导航**:访问网站、在页面间跳转
- **交互元素**:点击按钮、填写表单、滚动内容
- **可视化反馈**:对网页元素截图
- **信息抽取**:提取并总结网页内容
- **多步任务**:通过对话完成复杂的浏览序列

## 环境配置

### 环境要求

- Python 3.8+
- Node.js 和 npm(Playwright 需要)
  - 这是硬性要求!应用使用 Playwright 控制无头浏览器
  - 从 [nodejs.org](https://nodejs.org/) 下载安装
- OpenAI 或 Anthropic API Key

### 安装

1. 克隆本仓库:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd mcp_ai_agents/browser_mcp_agent
   ```

2. 安装所需的 Python 包:
   ```bash
   pip install -r requirements.txt
   ```

3. 确认 Node.js 和 npm 已安装:
   ```bash
   node --version
   npm --version
   ```
   两条命令都应返回版本号,否则请先安装 Node.js。

4. 配置 API Key,以下方式**二选一**:

   **a) 通过环境变量(OpenAI 最简单):**
   ```bash
   export OPENAI_API_KEY=your-openai-api-key
   ```

   **b) 通过 `mcp_agent.secrets.yaml`(Ollama 或任何自定义 base URL 必须用这种方式):**
   ```bash
   cp mcp_agent.secrets.yaml.example mcp_agent.secrets.yaml
   # 编辑 mcp_agent.secrets.yaml,把你的 key 填在 openai.api_key 下
   ```

### 使用本地 Ollama 模型运行

`mcp-agent` 走的是 OpenAI 兼容端点,而 Ollama 在 `http://localhost:11434/v1` 恰好暴露了这样一个端点,所以只需改配置就能跑本地模型——不用改代码、不用加依赖。参见 [#329](https://github.com/Shubhamsaboo/awesome-llm-apps/issues/329) 的讨论。

1. 安装并启动 Ollama,然后拉取一个支持工具调用的模型:
   ```bash
   ollama pull llama3.2
   ollama serve
   ```

2. 编辑 `mcp_agent.config.yaml`,把 `openai:` 块替换为:
   ```yaml
   openai:
     base_url: "http://localhost:11434/v1"
     default_model: "llama3.2"
   ```

3. 在 `mcp_agent.secrets.yaml` 中,把 `api_key` 设为任意非空值(Ollama 会忽略它):
   ```yaml
   openai:
     api_key: "ollama"
   ```

4. 正常运行——`streamlit run main.py`。这条路径不需要 `OPENAI_API_KEY` 环境变量。

> 注意:浏览器自动化依赖有推理能力的模型。较小的本地模型可能难以胜任多步 Playwright 任务。

### 运行应用

1. 启动 Streamlit 应用:
   ```bash
   streamlit run main.py
   ```

2. 在应用界面中:
   - 输入浏览命令
   - 点击 "Run Command"
   - 查看结果和截图

### 示例命令

#### 基础导航
- "打开 www.mcp-agent.com"
- "返回上一页"

#### 页面交互
- "点击登录按钮"
- "往下滚动看更多内容"

#### 内容抽取
- "总结这个页面的主要内容"
- "提取导航菜单项"
- "对首屏区域截图"

#### 多步任务
- "去博客页面,找到最新文章,总结它的要点"

## 架构

本应用使用:
- Streamlit 构建用户界面
- MCP(Model Context Protocol)连接 LLM 与工具
- Playwright 做浏览器自动化
- [MCP-Agent](https://github.com/lastmile-ai/mcp-agent/) 提供智能体框架
- OpenAI 模型负责理解命令并生成回复
