> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🚀 Google ADK 速成课

一套从基础到进阶、系统学习 Google Agent Development Kit(ADK)的完整教程系列。本速成课的目标是让你从零开始,成长为能独立用 Google ADK 构建 AI 智能体的开发者。

> **📌 注意:本课程已针对新的 Gemini 3 Flash 模型更新!**
> 课程中的所有教程均使用 **Gemini 3 Flash** 模型(例如 `gemini-3-flash-preview`)。

## 📚 什么是 Google ADK?

Google ADK(Agent Development Kit,智能体开发套件)是一个灵活、模块化的 **AI 智能体开发与部署框架**。它针对 Gemini 和 Google 生态做了优化,但同时是**模型无关**和**部署无关**的,可以与其他框架配合使用。

### 核心特性:
- **灵活编排**:既可以用工作流智能体定义流程,也可以用 LLM 驱动动态路由
- **多智能体架构**:用多个专职智能体构建模块化应用
- **丰富的工具生态**:使用预置工具、自定义 Python 函数,或集成第三方库
- **开箱可部署**:容器化后可部署到任意环境
- **内置评估**:系统化评估智能体表现
- **安全与可信**:内置构建可信智能体的成熟模式

## 🎯 学习路径

本速成课通过动手教程覆盖 Google ADK 的核心概念:

### 📚 **教程列表**

1. **[1_starter_agent(入门智能体)](./1_starter_agent/README.md)** - 你的第一个 ADK 智能体
   - 创建基础智能体
   - 理解 ADK 工作流
   - 简单文本处理

2. **[2_model_agnostic_agent(模型无关智能体)](./2_model_agnostic_agent/README.md)** - 模型无关的智能体开发
   - **[2.1 OpenAI 智能体](./2_model_agnostic_agent/README.md)** - 接入 OpenAI
   - **[2.2 Anthropic Claude 智能体](./2_model_agnostic_agent/README.md)** - 接入 Claude

3. **[3_structured_output_agent(结构化输出智能体)](./3_structured_output_agent/README.md)** - 类型安全的响应
   - **[3.1 客服工单智能体](./3_structured_output_agent/3_1_customer_support_ticket_agent/README.md)** - Pydantic 模式
   - **[3.2 邮件智能体](./3_structured_output_agent/3_2_email_agent/README.md)** - 结构化数据校验

4. **[4_tool_using_agent(工具调用智能体)](./4_tool_using_agent/README.md)** - 带工具的智能体
   - **[4.1 内置工具](./4_tool_using_agent/4_1_builtin_tools/README.md)** - 搜索、代码执行
   - **[4.2 函数工具](./4_tool_using_agent/4_2_function_tools/README.md)** - 自定义 Python 函数
   - **[4.3 第三方工具](./4_tool_using_agent/4_3_thirdparty_tools/README.md)** - LangChain、CrewAI
   - **[4.4 MCP 工具](./4_tool_using_agent/4_4_mcp_tools/README.md)** - MCP 工具集成

5. **[5_memory_agent(记忆智能体)](./5_memory_agent/README.md)** - 记忆与会话管理
   - **[5.1 内存会话](./5_memory_agent/5_1_in_memory_conversation_agent/README.md)** - 基础会话管理
   - **[5.2 持久化会话](./5_memory_agent/5_2_persistent_conversation_agent/README.md)** - 用 SQLite 做数据库存储

6. **[6_callbacks(回调)](./6_callbacks/README.md)** - 回调模式与监控
   - **[6.1 智能体生命周期回调](./6_callbacks/6_1_agent_lifecycle_callbacks/README.md)** - 监控智能体的创建与清理
   - **[6.2 LLM 交互回调](./6_callbacks/6_2_llm_interaction_callbacks/README.md)** - 追踪模型请求与响应
   - **[6.3 工具执行回调](./6_callbacks/6_3_tool_execution_callbacks/README.md)** - 监控工具调用与结果

7. **[7_plugins(插件)](./7_plugins/README.md)** - 面向横切关注点的插件系统
   - 全局回调管理
   - 请求/响应修改
   - 错误处理与日志
   - 用量分析与监控

8. **[8_simple_multi_agent(简单多智能体)](./8_simple_multi_agent/README.md)** - 多智能体编排
   - **[8.1 多智能体研究员](./8_simple_multi_agent/README.md)** - 由专职智能体组成的研究流水线
   - 带子智能体的协调者智能体
   - 顺序工作流:研究 → 总结 → 评审
   - 集成网络搜索并输出综合分析

9. **9_multi_agent_patterns(多智能体模式)** - 多智能体设计模式
   - **[9.1 顺序智能体](./9_multi_agent_patterns/9_1_sequential_agent/README.md)** — 确定性的子智能体流水线(如:起草 → 评审 → 改进)
   - **[9.2 循环智能体](./9_multi_agent_patterns/9_2_loop_agent/README.md)** — 带显式停止条件的迭代优化(最大迭代次数或退出工具),以推文打磨循环为例演示该模式
   - **[9.3 并行智能体](./9_multi_agent_patterns/9_3_parallel_agent/README.md)** — 并发执行多个子智能体并合并结果

## 🛠️ 前置条件

开始本速成课前,请确保:

- 已安装 **Python 3.11+**
- 已从 [Google AI Studio](https://aistudio.google.com/) 获取 **Google AI API Key**
- 具备 Python 和 API 的基础知识

## 📖 如何使用本课程

每个教程遵循统一的结构:

- **README.md**:概念讲解与学习目标
- **Python 文件**:包含智能体实现和 Streamlit 应用
- **requirements.txt**:本教程的依赖

### 学习方法:
1. **阅读 README** 理解概念
2. **阅读代码** 看具体实现
3. **运行示例** 观察实际效果
4. **动手实验** 修改代码
5. **准备好后进入下一课**

## 🎯 教程特色

每个教程都包含:
- ✅ **清晰的概念讲解**
- ✅ **精简可运行的代码示例**
- ✅ **真实场景用例**
- ✅ **分步操作指引**
- ✅ **最佳实践与技巧**

## 📚 更多资源

- [Google ADK 官方文档](https://google.github.io/adk-docs/)
- [Google AI Studio](https://aistudio.google.com/)
- [Gemini API 参考](https://ai.google.dev/docs)
- [Pydantic 文档](https://docs.pydantic.dev/)

## 🤝 参与贡献

欢迎提交改进、修复 Bug 或补充新教程。每个教程应满足:
- 自包含、可直接运行
- 文档清晰
- 遵循既有结构
- 代码精简、易懂
