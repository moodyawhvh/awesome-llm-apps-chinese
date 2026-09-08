> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# AI MCP 应用生成器

用聊天描述一个 MCP 应用,即可得到一个实时运行的沙箱实例。基于 [CopilotKit](https://github.com/CopilotKit/CopilotKit)、[AG-UI](https://github.com/ag-ui-protocol/ag-ui)、[Mastra](https://mastra.ai/) 和 [E2B](https://e2b.dev/) 沙箱构建。

**Gen UI 概念——智能体生成的应用。** 大多数生成式 UI 只是从固定的组件目录里挑组件。这里更进一步:智能体在运行时现场编写一个全新的 MCP 应用,生成器为其开通一个 E2B 沙箱来承载,应用内联渲染并具备完整的双向工具访问能力。智能体产出的"组件"*本身就是一个完整的应用*。

这个 monorepo 把 **MCP 应用生成器** 的 Web UI(`apps/web`)接到一个 **Mastra** 智能体(`/api/mastra-agent`)上,由它开通运行 **`mcp-use-server`** 模板(`apps/mcp-use-server`)的 **E2B** 沙箱。可选的本地示例是 **`apps/threejs-server`** 中的 [Three.js MCP 示例](https://github.com/modelcontextprotocol/ext-apps/tree/main/examples/threejs-server)(全本地运行时用作侧边栏默认值)。

https://github.com/user-attachments/assets/4bb35806-5e42-43c0-a8fe-01c0d1e5b8b3

## 前置条件

- Node.js 20+
- [pnpm](https://pnpm.io/installation)(workspace 必需)
- OpenAI API Key(`OPENAI_API_KEY`);可选 **`OPENAI_MODEL`** 用于 `/api/mastra-agent`(默认 **`gpt-5.5`**)

## 快速开始

在项目根目录(`generative_ui_agents/ai-mcp-app-builder`)下:

```powershell
pnpm i
Copy-Item .env.example .env
# 编辑 .env:至少设置 OPENAI_API_KEY=sk-proj-...;沙箱开通需配置 E2B_*(见下文)
pnpm dev
```

**`pnpm dev`** 会运行 **Turbo**,启动各 workspace 的 **`dev`** 任务(Next.js 应用及其他已配置的应用——见根目录 `package.json` / `turbo.json`)。

**单独运行各组件**

| 目标                                            | 命令                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| 仅 Web 应用                                    | `pnpm --filter web dev`(仓库根目录)或 `cd apps/web && pnpm dev` |
| Three.js MCP 示例(本地侧边栏默认)     | `cd apps/threejs-server && pnpm dev`                                  |
| `mcp-use-server`(本地 MCP,非 E2B 镜像) | `cd apps/mcp-use-server && pnpm dev`                                  |

打开 Next 显示的 URL(通常是 `http://localhost:3000`)。

## 动态 MCP UI(侧边栏)

- **MCP 服务器:** 按 URL 增删(可选 `serverId`);列表以 **`x-mcp-servers`** 请求头发送。内置默认:**Excalidraw**(`https://mcp.excalidraw.com`)。可通过 **`NEXT_PUBLIC_DEFAULT_MCP_SERVERS`** / **`DEFAULT_MCP_SERVERS`** 覆盖。
- **工具:** 紧凑列表;点开工具可在**模态框**中查看**详情 + 预览**(不是第三个移动端标签页)。
- **聊天:** CopilotKit v2 聊天,带建议提示。

### 移动端布局

- **标签页:** **Chat(聊天)** 和 **Tools(工具)**(服务器 + 工具列表)。工具**预览 / 详情**在**模态框**中打开。
- **桌面端:** 侧边栏 + 聊天列(**`md+`**)。
- **聊天体验:** 通过间距和底部留白,避免输入框遮挡最新消息。

## 环境变量(E2B)

| 变量       | 说明                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `E2B_API_KEY`  | 从 [e2b.dev/dashboard](https://e2b.dev/dashboard) 获取                                                                                             |
| `E2B_TEMPLATE` | **`build.dev.ts`** / **`build.prod.ts`** 构建后,`Template.build` 输出的 **`templateId`**                                                    |
| `E2B_REPO_URL` | **`E2B_TEMPLATE`** 为空时使用——把仓库克隆进沙箱(冷启动较慢)。代码中的默认值为 **`mcp-use-server-template`** 的 GitHub URL |

## 文档

**UI 入口:** `apps/web/app/page.tsx`(主题、布局、CopilotKit 接线)。

**外部文档**

- [CopilotKit](https://docs.copilotkit.ai)
- [Next.js](https://nextjs.org/docs)
- [MCP Apps / UI](https://mcpui.dev/guide/introduction)
