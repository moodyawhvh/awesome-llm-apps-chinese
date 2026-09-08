> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🧩 Agent Skills(智能体技能)

**即插即用技能,适用于 Claude Code、Codex、Cursor、OpenClaw、Hermes、Antigravity 以及任何兼容 [SKILL.md](https://agentskills.io) 规范的智能体。**

一个技能就是一个包含 `SKILL.md` 文件的文件夹——外加脚本和参考资料——你的智能体会按需发现并加载它。一份技能可同时用于 Claude Code、Codex、Cursor 及其他编码智能体。

## 准入门槛

技能注册表里的大多数"技能"只是纯文本的提示词堆砌——把模型早就懂的建议套个 frontmatter 外壳。这里的技能必须凭实力入选:

- **真脚本** —— 确定性的工作用代码跑,而不是靠 token 生成
- **有据可查的参考资料** —— 深度内容按需加载,并附来源
- **证据优先,不靠感觉** —— 技能做出的每个断言都必须可验证
- **默认本地化、隐私化** —— 不声明就不发起网络调用,任何数据不离开你的机器
- **发布前经过测试** —— 用真实输入测试,而不只是理想路径的固定样例

## 技能列表

| 技能 | 功能说明 |
|---|---|
| [🧠 advisor-orchestrator-worker(顾问-编排器-工人)](advisor-orchestrator-worker/) | 把你的智能体变成三层模型团队的编排器:便宜的无状态 worker 并行干活,昂贵的顾问只在关键决策节点被咨询,每一步之间都有验证闸门——并且做了预算控制,一次运行不会烧穿你的 API 账单 |
| [🏺 commit-archaeologist(提交考古学家)](commit-archaeologist/) | 从本地 git 历史还原某个文件或代码区域为何存在,包括引入它的提交、后续修改、反复相伴出现的文件、当前的作者归属以及意图线索 |
| [🩺 dependency-doctor(依赖医生)](dependency-doctor/) | 给依赖清单做"尸检",找出遮蔽标准库的同名依赖、过时的 backport 包、未锁定版本的条目、重复或冲突的版本约束,以及已主动撤回的 PyPI 发布版本 |
| [🪦 project-graveyard(项目墓地)](project-graveyard/) | 扫描你机器上死掉的副业项目,从 git 历史里剖析每个项目死因(部署恐惧、付费墙卡壳、被新项目替代),展示你个人的"死亡模式",并复活最有心跳的那一个——它开出的每一次"复活处方"都带复发追踪 |
| [🔭 scope-creep-detector(范围蔓延探测器)](scope-creep-detector/) | 将 diff 与声明的意图做比对,标记无关文件和范围蔓延信号,并建议哪些该保留、哪些该拆分、哪些需要给出理由 |
| [♾️ self-improving-agent-skills(自我改进技能)](self-improving-agent-skills/) | 使用 Gemini 和 ADK 自动优化智能体技能 |
| [🎙️ thinking-out-loud(边想边说)](thinking-out-loud/) | 在智能体行动之前审计它到底听懂了什么:对任何语音式絮叨,它会回显一份可快速浏览的纪要,把自己的猜测单独隔离标注、把你的口头纠正醒目标出——因为追问只能验证模型怀疑的东西,而回显验证的是它相信的东西 |

更多技能陆续发布,一次一个。

## ⚡ 安装

一条命令,任意智能体——[skills CLI](https://skills.sh) 会检测你安装了什么(Claude Code、Codex、Cursor、Copilot、Antigravity、OpenClaw、Hermes 及其他编码智能体),并把技能放到正确的位置:

```bash
npx skills add https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/agent_skills/<skill>
```

喜欢手动?克隆仓库后把技能文件夹复制进你的智能体技能目录:

| 智能体 | 技能目录 |
|---|---|
| Claude Code | `~/.claude/skills/` |
| Codex | `~/.codex/skills/` |
| Cursor | `~/.cursor/skills/` |
| GitHub Copilot / VS Code | `~/.copilot/skills/` |
| Antigravity CLI | 项目内的 `.agents/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Hermes | `~/.hermes/skills/`(同时读取 `~/.agents/skills/`) |

团队安装:把技能放进仓库内的 `.agents/skills/`——这是大多数 2026 年智能体会读取的项目级共享目录(Codex、Cursor、Copilot、Antigravity;Claude Code 使用 `.claude/skills/`)。

## 安装任何技能之前——包括我们的

技能以你智能体的权限运行:你的 shell、你的文件、你的凭据。把它们当作软件对待,而不是文档。无论来自我们还是他人,安装前请通读 `SKILL.md` 和每一个脚本。这里的技能都会事先声明任何网络使用,且不携带任何安装期执行——绝不会有任何东西要求你的智能体去 `curl | bash`。

每个技能在 [`evals/`](evals/) 目录下还带一个可执行的评估用例——安装前先在克隆的仓库里跑一遍,并留意你*没有*复制的东西:技能文件夹里只包含运行时真正需要的内容。
