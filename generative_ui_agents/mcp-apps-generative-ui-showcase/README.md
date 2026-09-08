> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# MCP 应用生成式 UI 演示集

https://github.com/user-attachments/assets/48eeab8d-7845-4d06-83ef-d518a807da03

订机票、订酒店、管理投资组合、跑看板——全部在聊天里完成。基于 [CopilotKit](https://github.com/CopilotKit/CopilotKit)、[AG-UI](https://github.com/ag-ui-protocol/ag-ui) 和 [MCP Apps](https://github.com/modelcontextprotocol/ext-apps) 构建,演示 MCP Apps 扩展(SEP-1865)在聊天中直接渲染交互式 UI 的能力。

**Gen UI 概念——跑在工具协议之上的沙箱聊天内应用。** MCP 服务器注册工具(`workout-generator`、`create-portfolio`、`create-board`……),并通过 `_meta["ui/resourceUri"]` 把每个工具链接到一个 HTML/JS 资源。当智能体调用某个工具时,CopilotKit 把关联的应用作为沙箱 iframe 挂载到聊天中;iframe 通过 JSON-RPC `postMessage` 与 MCP 工具回传通信。结果:完整可交互的产品界面(多步向导、拖拽看板、实时图表)内联运行——逻辑归服务器管,呈现归聊天管。

## 在线演示

**https://web-app-production-9af6.up.railway.app**

## 精选应用

| 应用                         | 说明                                                          | 示例提示词                                                   |
| --------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **✈️ 机票预订**      | 5 步向导:搜索航班、选择座位、填写乘客信息 | "帮我订 1 月 20 日 JFK 飞往 LAX 的机票,2 位乘客" |
| **🏨 酒店预订**        | 4 步向导:搜索酒店、对比房型、预订住宿      | "帮我找巴黎 1 月 15 日至 18 日的酒店,2 位客人"       |
| **📈 投资模拟器** | 投资组合管理,带实时图表和买卖交易               | "创建一个 1 万美元的科技股组合"                        |
| **📋 看板**         | 拖拽式任务管理,带列和卡片                     | "为我的软件项目创建一个看板"                  |

## 快速开始

### 1. 安装依赖

```bash
# 在 mcp-apps 目录下
npm install

cd mcp-server
npm install
cd ..
```

### 2. 配置环境变量

在 `mcp-apps` 目录下创建 `.env.local`:

```bash
OPENAI_API_KEY=sk-...
```

### 3. 构建与运行

```bash
# 终端 1:构建并运行 MCP 服务器
cd mcp-server
npm run build
npm run dev
# 服务器运行在 http://localhost:3001/mcp

# 终端 2:运行 Next.js 前端(在 mcp-apps 目录下)
npm run dev
# 前端运行在 http://localhost:3000
```

打开 http://localhost:3000,试试示例提示词!

## 工作原理

MCP 应用是渲染在聊天侧边栏沙箱 iframe 中的交互式 HTML/JS 应用,通过 postMessage 上的 JSON-RPC 与 MCP 服务器通信。

```
用户:"订一张 JFK 到 LAX 的机票"
        ↓
AI 调用 search-flights 工具
        ↓
MCPAppsMiddleware 拦截,获取 HTML 资源
        ↓
CopilotKit 在 iframe 中渲染 flights-app.html
        ↓
用户与向导 UI 交互
        ↓
UI 经 postMessage 调用 MCP 工具 → 服务器
```

### 工具注册模式

```typescript
// 工具通过 _meta 声明自己的 UI 资源
server.registerTool(
  "search-flights",
  {
    inputSchema: { origin, destination, departureDate, passengers },
    _meta: { "ui/resourceUri": "ui://flights/flights-app.html" },
  },
  handler,
);

// 资源提供 HTML 内容
server.registerResource(
  "flights-app",
  "ui://flights/flights-app.html",
  {
    mimeType: "text/html+mcp", // 标记为 MCP 应用
  },
  () => ({ contents: [{ text: htmlContent }] }),
);
```

## 项目结构

```
mcp-apps/
├── src/app/
│   ├── page.tsx                    # 主演示页面
│   └── api/copilotkit/route.ts     # CopilotKit + MCPAppsMiddleware
├── mcp-server/
│   ├── server.ts                   # 包含所有工具的 MCP 服务器
│   ├── src/
│   │   ├── flights.ts              # 15 个机场,6 家航空公司
│   │   ├── hotels.ts               # 10 个城市,30 家酒店
│   │   ├── stocks.ts               # 18 支股票,投资组合
│   │   └── kanban.ts               # 看板模板
│   └── apps/
│       ├── flights-app.html        # 机票预订向导
│       ├── hotels-app.html         # 酒店预订向导
│       ├── trading-app.html        # 投资模拟器
│       └── kanban-app.html         # 看板
└── README.md
```

## 关键技术

- **CopilotKit**(`@copilotkit/*`)—— 支持 MCP 应用的 AI 聊天界面
- **AG-UI MCP Apps 中间件** —— 打通 MCP 服务器与 CopilotKit
- **MCP SDK**(`@modelcontextprotocol/sdk`)—— Model Context Protocol 服务器
- **Vite** —— 把每个应用打包成单个自包含 HTML 文件

## 部署

演示部署在 Railway 上,包含两个服务:

| 服务    | URL                                               |
| ---------- | ------------------------------------------------- |
| Web 应用    | https://web-app-production-9af6.up.railway.app    |
| MCP 服务器 | https://mcp-server-production-bbb4.up.railway.app |

生产环境部署时,设置 `MCP_SERVER_URL` 环境变量指向你部署的 MCP 服务器。
