> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🚀 OpenAI Agents SDK 速成课

一套从基础到进阶、系统学习 OpenAI Agents SDK 的完整教程系列。本速成课的目标是让你从零开始,成长为能独立用 OpenAI Agents SDK 构建 AI 智能体的开发者。

## 📚 什么是 OpenAI Agents SDK?

OpenAI Agents SDK 是一个强大的 **AI 智能体开发与部署框架**,它提供:

### 核心特性:
- **智能体编排**:创建和管理智能 AI 智能体
- **工具集成**:用自定义工具和内置工具扩展智能体
- **结构化输出**:基于 Pydantic 模型的类型安全响应
- **多智能体工作流**:通过 handoff(交接)机制协调多个智能体
- **实时执行**:同步、异步与流式三种执行方式
- **语音集成**:静态、流式与实时语音能力
- **会话管理**:自动维护对话记忆与历史
- **生产就绪**:内置追踪、护栏与监控

## 🎯 学习路径

本速成课通过动手教程覆盖 OpenAI Agents SDK 的核心概念:

### 📚 **教程列表**

#### **🌱 基础层**

1. **[1_starter_agent(入门智能体)](./1_starter_agent/README.md)** - 你的第一个 OpenAI 智能体
   - 基础智能体的创建与配置
   - 理解不同的执行方式
   - 简单的文本处理与响应

2. **[2_structured_output_agent(结构化输出智能体)](./2_structured_output_agent/README.md)** - 类型安全的响应
   - **客服工单智能体** - 把投诉转化为结构化工单
   - **商品评论智能体** - 从评论中提取结构化数据
   - Pydantic 模型与数据校验

#### **🔧 核心能力层**

3. **[3_tool_using_agent(工具调用智能体)](./3_tool_using_agent/README.md)** - 智能体工具与函数
   - 用 `@function_tool` 定义自定义函数工具
   - 内置工具(WebSearch、CodeInterpreter、FileSearch)
   - 工具集成与执行模式

4. **[4_running_agents(运行智能体)](./4_running_agents/README.md)** - 运行与执行精通
   - 智能体循环:LLM 调用、工具执行、handoff
   - 同步、异步与流式执行方式
   - 高级流式事件与异常处理
   - 运行配置与对话管理

5. **[5_context_management(上下文管理)](./5_context_management/README.md)** - 状态与上下文处理
   - 跨运行传递上下文
   - 状态持久化与管理
   - 对话流程控制

#### **🧠 进阶特性层**

6. **[6_guardrails_validation(护栏与校验)](./6_guardrails_validation/README.md)** - 安全与校验
   - 用于用户输入校验的输入护栏
   - 用于响应过滤的输出护栏
   - 自定义业务规则校验

7. **[7_sessions(会话)](./7_sessions/README.md)** - 会话与记忆管理
   - 用 SQLiteSession 自动维护对话历史
   - 记忆操作与对话修正
   - 多会话的管理与组织

#### **🤝 多智能体层**

8. **[8_handoffs_delegation(交接与委派)](./8_handoffs_delegation/README.md)** - 智能体交接与委派
   - 智能体之间的任务委派
   - 分诊系统与智能路由
   - 带回调的高级 handoff 配置

9. **[9_multi_agent_orchestration(多智能体编排)](./9_multi_agent_orchestration/README.md)** - 复杂工作流
   - 用 `asyncio.gather()` 并行执行智能体
   - "智能体即工具"的编排模式
   - 多阶段工作流协调

#### **🔍 生产层**

10. **[10_tracing_observability(追踪与可观测性)](./10_tracing_observability/README.md)** - 监控与调试
    - 内置追踪与执行可视化
    - 为复杂工作流自定义 trace 和 span
    - 性能监控与优化

#### **🎙️ 语音与进阶特性**

11. **[11_voice(语音)](./11_voice/README.md)** - 语音智能体与实时对话
    - 静态语音处理(轮次式交互)
    - 流式语音处理(实时对话)
    - 实时语音智能体(基于 WebSocket 的超低延迟)
    - 语音转文字、文字转语音与语音流水线

## 🛠️ 前置条件

开始本速成课前,请确保:

- 已安装 **Python 3.8+**(语音功能需要 Python 3.9+)
- 已从 [OpenAI 平台](https://platform.openai.com/api-keys)获取 **OpenAI API Key**
- 具备 Python 和 API 的基础知识
- 了解 async/await 概念(有帮助但非必需)
- **语音教程**:需要麦克风和扬声器/耳机

## 📖 如何使用本课程

每个教程遵循统一的结构:

- **README.md**:概念讲解与学习目标
- **Python 文件**:包含智能体实现与示例
- **交互界面**:用于动手测试的 Streamlit 网页应用
- **子模块**:按概念组织的示例
- **requirements.txt**:本教程的依赖
- **env.example**:环境变量模板

### 学习方法:
1. **阅读 README** 理解概念
2. **阅读代码** 看具体实现
3. **运行示例** 观察智能体的实际表现
4. **动手实验** 修改代码
5. **使用交互界面** 做动手测试
6. **用麦克风体验语音功能**(教程 11)
7. **准备好后进入下一课**

## 🎯 教程特色

每个教程都包含:
- ✅ **清晰的概念讲解**
- ✅ **精简可运行的代码示例**
- ✅ **真实场景用例**
- ✅ **分步操作指引**
- ✅ **交互式网页界面**
- ✅ **最佳实践与技巧**

## 🚀 快速开始

1. **克隆仓库** 并进入本目录
2. **从上面的列表选择一个教程**
3. **按该教程的 README** 指引操作
4. **安装依赖**:`pip install -r requirements.txt`
5. **配置环境**:把 `env.example` 复制为 `.env` 并填入你的 API Key
6. **运行示例**,开始学习!

## 🔧 环境配置

每个教程都需要 OpenAI API Key。在各自教程目录下创建 `.env` 文件:

```bash
OPENAI_API_KEY=sk-your_openai_key_here
```

API Key 获取地址:[https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

## 💡 学习建议

- **按顺序学**:依序学习可获得最佳学习效果
- **大胆实验**:修改代码,观察会发生什么
- **多用网页界面**:交互式应用让学习更有代入感
- **认真读报错**:错误信息往往包含有用的指引
- **加入社区**:与其他学习者交流、分享经验

## 🚨 常见问题

### API Key 问题
- 确认 `.env` 文件位于教程目录下
- 确认 API Key 有效且有足够额度
- 检查环境变量名有没有拼写错误

### 导入错误
- 确认已安装依赖:`pip install -r requirements.txt`
- 确认使用的是 Python 3.8 或更高版本
- 如有环境冲突,尝试创建虚拟环境

### 限流
- OpenAI 按你的套餐设有速率限制
- 触发限流时稍等片刻再试
- 如需更高额度,可升级 OpenAI 套餐

## 📚 更多资源

- [OpenAI Agents SDK 官方文档](https://openai.github.io/openai-agents-python/)
- [OpenAI 平台](https://platform.openai.com/)
- [Pydantic 文档](https://docs.pydantic.dev/)
- [Streamlit 文档](https://docs.streamlit.io/)

## 🤝 参与贡献

欢迎提交改进、修复 Bug 或补充新教程。每个教程应满足:
- 自包含、可直接运行
- 文档清晰
- 遵循既有结构
- 代码精简、易懂

## 📊 学习进度追踪

记录你在课程中的进度:

- [ ] **教程 1**:创建基础智能体 ✨
- [ ] **教程 2**:用 Pydantic 做结构化输出
- [ ] **教程 3**:工具集成与自定义函数
- [ ] **教程 4**:精通执行方式
- [ ] **教程 5**:上下文与状态管理
- [ ] **教程 6**:护栏与校验
- [ ] **教程 7**:会话与记忆管理
- [ ] **教程 8**:智能体交接与委派
- [ ] **教程 9**:多智能体编排
- [ ] **教程 10**:追踪与可观测性
- [ ] **教程 11**:语音智能体与实时对话 🎯

祝学习愉快!🚀
