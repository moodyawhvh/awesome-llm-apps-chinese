> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🖼️ 生成式 UI 与智能体前端

**让智能体渲染 UI,而不只是输出文本。**

生成式 UI(Gen UI)应用让 LLM 输出富交互的前端组件,而不是(或除了)普通的聊天消息。模型决定*展示什么*,前端渲染真实组件,用户可以点击、编辑、回应——从而闭合"推理"与"界面"之间的循环。

本板块收集了在常见技术栈下构建生成式 UI 应用的自包含模板:

- **AG-UI / CopilotKit** —— 面向 React 应用的流式智能体 ↔ UI 协议
- **Vercel AI SDK** —— `streamUI` / React Server Components 生成式 UI
- **LangChain / LangGraph UI** —— 结构化工具调用渲染为组件
- **自定义工具调用 → 组件渲染器** —— 任意框架下的极简 DIY 模式
