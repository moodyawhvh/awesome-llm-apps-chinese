> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🚀 多 MCP 智能助手

多 MCP 智能助手是一个强大的效率工具,它整合了多个 Model Context Protocol(MCP)服务器,让你通过自然语言交互无缝访问 GitHub、Perplexity、日历和 Gmail 服务。这款高级 AI 助手由 Agno 的 AI Agent 框架驱动,是你数字工作空间里的效率倍增器。

## 功能特性

- **多智能体系统**
    - **GitHub 集成**:完整的仓库管理、Issue 跟踪和代码分析
    - **Perplexity 研究**:实时联网搜索与信息收集
    - **日历管理**:日程安排与会议协调
    - **Gmail 集成**:邮件管理与沟通工作流

- **核心能力**:
  - 仓库管理(创建、克隆、fork、搜索)
  - Issue 与 PR 工作流(创建、更新、评审、合并、评论)
  - 实时联网搜索与调研
  - 日程安排与空闲时段管理
  - 邮件整理与自动回复
  - 跨平台工作流自动化

- **进阶特性**:
  - 带流式响应的交互式 CLI
  - 对话记忆与上下文保持
  - 面向复杂工作流的工具链式调用
  - 会话级专属用户与会话 ID
  - Markdown 格式的回复
  - 主动式工作流建议

- **效率导向**:
  - 跨平台自动化(GitHub Issue → 日历事件)
  - 研究驱动的开发工作流
  - 项目管理集成
  - 文档与知识共享

## 如何运行

按以下步骤配置并运行应用:

1. **克隆仓库**:
   ```bash
   git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
   cd awesome-llm-apps/mcp_ai_agents/multi_mcp_agent
   ```

2. **安装依赖**:
    ```bash
    pip install -r requirements.txt
    ```

3. **确认 Node.js 已安装**(MCP 服务器必需):
    ```bash
    node --version
    npm --version
    npx --version
    ```
    如果没有安装 Node.js,请从 [nodejs.org](https://nodejs.org/) 下载

4. **配置 API Key**:
    在项目目录下创建 `.env` 文件,写入以下变量:
    ```env
    OPENAI_API_KEY=your-openai-api-key
    GITHUB_PERSONAL_ACCESS_TOKEN=your-github-token
    PERPLEXITY_API_KEY=your-perplexity-api-key
    ```

    - OpenAI API Key 获取地址:https://platform.openai.com/api-keys
    - GitHub Personal Access Token 获取地址:https://github.com/settings/tokens(需勾选 `repo`、`user` 和 `admin:org` 权限范围)
    - Perplexity API Key 获取地址:https://www.perplexity.ai/
    - 按你的实际需求配置 OpenAI MCP 请求头

5. **运行多 MCP 智能体**:
    ```bash
    python multi_mcp_agent.py
    ```

6. **开始交互**:
    - 助手会校验你的环境变量
    - 生成唯一的用户与会话 ID
    - 初始化到所有 MCP 服务器的连接
    - 启动交互式 CLI 界面

## 使用方法

1. **环境校验**:助手自动检查所有必需的 API Key 和环境变量
2. **会话管理**:每个会话都有唯一的用户与会话 ID,用于追踪和上下文管理
3. **交互式命令**:用自然语言与集成的服务交互:

### 示例命令

**GitHub 操作**:
- "看看我最近的 GitHub 仓库"
- "在我的项目仓库里建一个新 issue"
- "在我的仓库里搜索 Python 代码"
- "评审一下最新的 pull request"

**调研与信息**:
- "搜索最新的 AI 动态"
- "机器学习领域现在有哪些热门话题?"
- "帮我找 FastAPI 的文档"
- "调研一下微服务的最佳实践"

**日历管理**:
- "下周安排一个会议"
- "看看我即将到来的日程"
- "帮我找一个 2 小时会议的空闲时段"

**跨平台工作流**:
- "建一个 GitHub issue 并安排一次跟进会议"
- "调研一个主题并生成摘要文档"
- "找找热门仓库并加进我的关注列表"

4. **会话控制**:输入 'exit'、'quit' 或 'bye' 结束会话

## 架构

多 MCP 智能体使用了:
- **Agno 框架**:智能体编排与工具管理
- **OpenAI GPT-4o**:核心语言模型
- **MCP 服务器**:外部服务集成
- **异步架构**:高效并发操作
- **记忆系统**:上下文保持与对话历史

## 说明

助手通过 Node.js 包连接多个 MCP 服务器。请确保网络连接稳定,且所有服务都配有有效的 API Key。工具链式调用能力支持跨多个平台的复杂工作流,是开发者和职场人士的强力效率倍增器。
