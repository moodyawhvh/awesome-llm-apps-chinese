> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 📡 发布雷达智能体

Release Radar 是一个基于 Google ADK 构建的常驻依赖简报智能体。它读取 `requirements.txt` 或 `package.json`,对照 GitHub releases 检查已映射的依赖,只报告需要关注的变更:破坏性变更、弃用、安全修复、被撤回的发布,以及主版本升级。

本应用可在 ADK Web 中交互运行,也可作为定时 FastAPI 服务运行。示例模式是确定性的,不发起任何 GitHub 请求。定时投递默认 dry-run,在配置 Gmail 或 webhook 之前保持关闭。

## 功能特性

- **清单解析**:读取 Python requirements 以及 npm 的运行时和开发依赖。
- **GitHub 发布扫描**:使用 GitHub REST API,可选配置 token。
- **影响排序**:对安全、破坏性、撤回、主版本和弃用信号打分。
- **补丁噪音过滤**:丢弃没有影响信号的常规 patch 和 minor 发布。
- **文本与 HTML 简报**:按依赖分组呈现变更,含版本差、原因、影响和发布链接。
- **Google ADK 智能体**:暴露 `root_agent`,支持交互式依赖问答。
- **调度钩子**:接受直接 HTTP 和 Pub/Sub 触发。
- **显式开启的投递**:仅在明确配置后支持 Gmail 和通用 webhook。

## 工作原理

1. `radar.py` 解析清单,把已知的包名或 GitHub 依赖 URL 映射到对应仓库。
2. 示例模式加载确定性的 GitHub 形状数据;实时模式抓取最近的 GitHub releases。
3. `ranker.py` 对发布说明分类并过滤常规噪音。
4. `delivery.py` 把选中的发布渲染为文本和 HTML。
5. ADK Web 交互式返回简报;`scheduler_api.py` 暴露定时的 HTTP 和 Pub/Sub 路径。
6. 只有当 `dry_run=false` 且配置了 Gmail 或 webhook 时,调度器才会发送。

源码模块使用 Python 标准库完成清单解析、GitHub 访问、渲染和投递。FastAPI 提供调度接口,Google ADK 提供交互式智能体。

## 环境要求

- Python 3.10+
- ADK Web 所需的 Gemini API Key
- 用于实时扫描的项目 `requirements.txt` 或 `package.json`
- 可选:提高 API 速率上限的 GitHub token
- 可选:用于投递的 Gmail OAuth 凭据或 webhook URL

## 安装

```bash
git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git
cd awesome-llm-apps/always_on_agents/release_radar_agent
pip install -r requirements.txt
export GOOGLE_API_KEY="your_gemini_api_key"
```

## 在 ADK Web 中运行

先用确定性示例数据启动:

```bash
adk web .
```

打开 ADK Web,选择 `release_radar_agent`,试试:

```text
给我今天的依赖发布简报。
```

要扫描真实项目,在启动 ADK Web 前设置清单的绝对路径并启用 GitHub 实时请求:

```bash
export RELEASE_RADAR_MANIFEST="/absolute/path/to/requirements.txt"
export RELEASE_RADAR_LIVE_GITHUB=true
export RELEASE_RADAR_GITHUB_TOKEN="optional_github_token"
adk web .
```

Release Radar 能识别直接的 GitHub 依赖 URL 和常见包,如 Pydantic、FastAPI、Requests、OpenAI、Anthropic、Google ADK、LangChain、React、Vite 和 Zod。未映射的依赖会出现在扫描备注里,不会中断简报生成。

## 运行调度 API

在服务环境中设置项目清单,然后从本目录启动后端:

```bash
export RELEASE_RADAR_MANIFEST="/workspace/requirements.txt"
export RELEASE_RADAR_LIVE_GITHUB=true
uvicorn scheduler_api:app --host 0.0.0.0 --port 8000
```

预览确定性示例简报(不投递):

```bash
curl "http://127.0.0.1:8000/release-radar/dry-run?top_n=5&live=false"
```

通过调度路径扫描清单,同时保持投递关闭:

```bash
curl -X POST "http://127.0.0.1:8000/release-radar/trigger" \
  -H "Content-Type: application/json" \
  -d '{"dry_run": true, "live": true, "top_n": 10}'
```

服务器只从 `RELEASE_RADAR_MANIFEST` 读取清单,请求负载无法指定任意本地文件。该路径必须存在于调度服务内部。需要扫描大量仓库时,请在服务环境中设置 `RELEASE_RADAR_GITHUB_TOKEN`。

## 启用投递

投递有两道独立的闸门:请求必须设置 `"dry_run": false`,且至少一个投递渠道完整配置。两者缺一,API 返回 skipped 状态,什么也不发。

### Gmail

创建一个有 Gmail API 权限的 Google OAuth 客户端,并用 `https://www.googleapis.com/auth/gmail.send` 权限范围生成 refresh token,然后设置:

```bash
export RELEASE_RADAR_DELIVERY="gmail"
export RELEASE_RADAR_EMAIL_TO="you@example.com"
export RELEASE_RADAR_EMAIL_FROM="you@example.com"
export RELEASE_RADAR_GMAIL_CLIENT_ID="your_google_oauth_client_id"
export RELEASE_RADAR_GMAIL_CLIENT_SECRET="your_google_oauth_client_secret"
export RELEASE_RADAR_GMAIL_REFRESH_TOKEN="your_gmail_refresh_token"
```

### Webhook

用 webhook 把简报路由到 Slack、Linear、Jira 或内部工作流:

```bash
export RELEASE_RADAR_DELIVERY="webhook"
export RELEASE_RADAR_WEBHOOK_URL="https://example.com/dependency-brief"
export RELEASE_RADAR_WEBHOOK_TOKEN="optional_bearer_token"
```

配置好任一渠道后,触发一次实时投递:

```bash
curl -X POST "http://127.0.0.1:8000/release-radar/trigger" \
  -H "Content-Type: application/json" \
  -d '{"dry_run": false, "live": true, "top_n": 10}'
```

## Cloud Scheduler

把 FastAPI 服务部署到 Cloud Run 或其他 HTTP 服务后面。Cloud Scheduler 可以调用直接端点:

```text
https://YOUR_SERVICE_URL/release-radar/trigger
```

也可以向 Pub/Sub 推送端点发布 base64 编码的 JSON:

```text
https://YOUR_SERVICE_URL/release-radar/pubsub
```

工作日早晨的时间表示例:

```text
0 9 * * 1-5
```

验证部署阶段保持 `dry_run` 为 `true`。

## 测试

```bash
python3 -m pytest always_on_agents/release_radar_agent/tests/unit -q
```

测试使用确定性的示例发布数据,并在检查投递安全性时对网络访问打补丁。

本应用遵循仓库根许可证,采用 Apache-2.0 授权。
