<div align="center">

# awesome-llm-apps 中文文档

[![原项目](https://img.shields.io/badge/原项目-Shubhamsaboo--awesome-llm-apps-blue?style=flat-square&logo=github)](https://github.com/Shubhamsaboo/awesome-llm-apps)
[![微信联系](https://img.shields.io/badge/微信-uaycar-brightgreen?style=flat-square&logo=wechat)](#)

**100+ 个开源 AI 智能体、Agent 技能与 RAG 应用。手工打造、端到端测试、Apache-2.0 许可。**

克隆即用,可改造,可商用 —— 完全免费开源。兼容 Claude、Gemini、GPT、DeepSeek、Llama、Qwen 等模型。

</div>

---

> 本文是 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 的中文翻译文档。原 README 为超长清单,此处汉化章节导语、使用说明与代表性条目,英文项目名与链接保持原样,完整清单请见原项目。

**代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

---

## 🚀 立即运行一个

10 秒给你的编码智能体一个新技能:

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/project-graveyard
```

然后问它:*"why do I never finish my side projects?"*

或者 30 秒克隆并运行任意智能体:

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/starter_ai_agents/ai_travel_agent
pip install -r requirements.txt
streamlit run travel_agent.py
```

> 📬 新模板每周更新,可在原项目持续获取。

## 📂 浏览全部模板

### 🧩 Agent 技能(Agent Skills)

给你的编码智能体新能力:一条命令安装,自然语言使用。每个技能附带真实代码并通过安全与评测 CI 门禁,支持 Claude Code、Codex、Cursor 等编码智能体。

代表性条目:

- [⚰️ Project Graveyard](agent_skills/project-graveyard/) — 找出你弃坑的所有副业项目,分析每个项目死因,并帮你重启值得回头的那个
- [🔭 Scope Creep Detector](agent_skills/scope-creep-detector/) — 检查一次代码变更是否超出了既定意图,建议保留、拆分或说明理由
- [🩺 Dependency Doctor](agent_skills/dependency-doctor/) — 检查依赖清单中的标准库误锁、过时移植包、未固定版本、重复约束与被撤回版本

### 🌱 入门级 AI 智能体(Starter AI Agents)

单文件智能体,只需一个 API key 就能跑起来,最适合入门。

代表性条目:

- [📊 AI Data Analysis Agent](starter_ai_agents/ai_data_analysis_agent/) — 用自然语言向任意 CSV 或 Excel 文件提问
- [🛫 AI Travel Agent (Local & Cloud)](starter_ai_agents/ai_travel_agent/) — 生成个性化的逐日旅行行程
- [🔍 OpenAI Research Agent](starter_ai_agents/openai_research_agent/) — 基于 OpenAI Agents SDK 的多智能体主题调研

### 🚀 进阶 AI 智能体(Advanced AI Agents)

生产级风格的智能体,带工具调用、记忆与多步推理。

代表性条目:

- [🔍 AI Deep Research Agent](advanced_ai_agents/single_agent_apps/ai_deep_research_agent/) — 结合 OpenAI Agents SDK 与 Firecrawl 的深度全网调研
- [💰 AI Financial Coach Agent](advanced_ai_agents/multi_agent_apps/ai_financial_coach_agent/) — 个性化的预算、负债与储蓄分析
- [🔍 AI Fraud Investigation Agent](advanced_ai_agents/single_agent_apps/ai_fraud_investigation_agent/) — 交叉比对公开记录,揪出对不上的机构

### 🛰️ 常驻智能体(Always-on Agents)

按计划或事件在后台运行,监听变化、判断优先级,主动推送简报或执行动作。

代表性条目:

- [📰 Always-on Hacker News Briefing Agent](always_on_agents/always_on_hn_briefing_agent/) — 定时侦察 HN,每天把排序后的简报发到 Slack 或邮箱
- [📡 Release Radar Agent](always_on_agents/release_radar_agent/) — 监控依赖版本发布,提醒破坏性、弃用、安全与主版本变更

### 🤝 多智能体团队(Multi-agent Teams)

多个智能体协作完成跨领域复杂任务。

代表性条目:

- [💲 AI Finance Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_finance_agent_team/) — 20 行 Python 搭出一支金融分析师团队
- [👨‍⚖️ AI Legal Agent Team (Cloud & Local)](advanced_ai_agents/multi_agent_apps/agent_teams/ai_legal_agent_team/) — 完整法务班底:调研、合同分析与策略
- [🏠 AI Real Estate Agent Team](advanced_ai_agents/multi_agent_apps/agent_teams/ai_real_estate_agent_team) — 房源搜索、市场分析与推荐

### 🗣️ 语音 AI 智能体(Voice AI Agents)

基于实时语音 API 的语音进、语音出智能体。

代表性条目:

- [📞 Customer Support Voice Agent](voice_ai_agents/customer_support_voice_agent/) — 基于自有文档回答的语音客服
- [🛡️ Insurance Claim Live Agent Team](voice_ai_agents/insurance_claim_live_agent_team/) — 基于 Gemini Live 的实时语音保险理赔录入

### 🖼️ 生成式 UI 与智能前端(Generative UI)

智能体不止输出文字,还能渲染交互式 UI 组件:表单、卡片、图表、可编辑方案。

代表性条目:

- [🗂️ Generative UI Starter Project](generative_ui_agents/generative-ui-starter-project/) — 聊天驱动的看板,你与智能体协同操作
- [📊 AI Dashboard Canvas Agent](generative_ui_agents/ai-dashboard-canvas-agent/) — 聊天里描述仪表盘,图表自动拼上画布

### 🎮 自主游戏智能体(Autonomous Game-Playing Agents)

端到端玩游戏的智能体:推理、策略与操作一体。

- [♜ AI Chess Agent](advanced_ai_agents/autonomous_game_playing_agent_apps/ai_chess_agent/) — 智能体白方对战智能体黑方,走子经过校验

### ♾️ MCP AI 智能体(MCP AI Agents)

通过 Model Context Protocol 连接外部工具与数据源。

代表性条目:

- [♾️ Browser MCP Agent](mcp_ai_agents/browser_mcp_agent/) — 用自然语言通过 MCP 驱动真实浏览器
- [🐙 GitHub MCP Agent](mcp_ai_agents/github_mcp_agent/) — 用大白话探索和分析任意仓库

### 📀 RAG(检索增强生成)

从最简检索链到 Agentic、多源 RAG 的完整方案。

代表性条目:

- [🔄 Corrective RAG (CRAG)](rag_tutorials/corrective_rag/) — 会给自己打分、回答前先重试的检索
- [🧬 Multimodal Agentic RAG](rag_tutorials/multimodal_agentic_rag/) — 文本、PDF、图片、音频、视频都能答,附引用来源
- [🦙 Local RAG Agent](rag_tutorials/local_rag_agent/) — Llama 3.2 + Qdrant,无需 API key

### 💾 带记忆的 LLM 应用(LLM Apps with Memory)

跨会话记住对话与用户状态的智能体和聊天应用。

代表性条目:

- [📝 LLM App with Personalized Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/llm_app_personalized_memory/) — 跨对话保持上下文的聊天机器人
- [🗄️ Local ChatGPT Clone with Memory](advanced_llm_apps/llm_apps_with_memory_tutorials/local_chatgpt_with_memory/) — 完全本地运行,每个用户独立记忆

### 💬 与 X 聊天(Chat with X)

把任意数据源变成聊天界面。

代表性条目:

- [📄 Chat with PDF (GPT & Llama3)](advanced_llm_apps/chat_with_X_tutorials/chat_with_pdf/) — 经典款,30 行 Python 搞定
- [📽️ Chat with YouTube Videos](advanced_llm_apps/chat_with_X_tutorials/chat_with_youtube_videos/) — 基于字幕转录向视频提问

### 🎯 LLM 优化工具(LLM Optimization Tools)

在不损失质量的前提下降低 token 用量、上下文体积与 API 成本。

- [🎯 Toonify Token Optimization](advanced_llm_apps/llm_optimization_tools/toonify_token_optimization/) — 使用 TOON 格式降低 30-60% 的 LLM API 成本

### 🔧 LLM 微调(LLM Fine-tuning)

开源模型的端到端微调配方。

- [🦙 Llama 3.2 Fine-tuning](advanced_llm_apps/llm_finetuning_tutorials/llama3.2_finetuning/) — 30 行代码微调,Colab 免费跑

### 🧑‍🏫 AI 智能体框架速成课(AI Agent Framework Crash Courses)

主流智能体框架的深入教程:Google ADK 与 OpenAI Agents SDK,覆盖入门智能体、函数调用、结构化输出、工具、记忆、多智能体编排与路由逻辑。

---

<div align="center">

**代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

⭐ 觉得有用请给原项目 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 点个 Star!

</div>

---

本项目为 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 的中文翻译版本,所有代码版权归原项目作者所有,遵循其原始许可证(Apache-2.0)。
