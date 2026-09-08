> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# ♾️ 自我改进的智能体技能

使用基于 **Google ADK(Agent Development Kit)** 和 **Gemini** 构建的多智能体系统,自动优化你的智能体技能。上传一个技能,让智能体生成测试场景与评估标准,然后看三个专职 ADK 智能体协同迭代,把你的技能越改越好。

<img width="960" height="718" alt="Screenshot 2026-04-12 at 7 26 04 PM" src="https://github.com/user-attachments/assets/35a31f1a-398d-4797-a5d8-de538b4391e5" />


## 工作原理

本应用实现了受 Karpathy autoresearch 方法论启发的自动化技能改进闭环,由一组 ADK 智能体驱动:

1. **上传**:拖入你的技能文件夹(遵循 [agentskills.io](https://agentskills.io) 规范)
2. **配置**:Executor 智能体生成测试场景与评估标准,可按需编辑、增删或重新生成
3. **优化**:三个 ADK 智能体协同——一个执行并打分,一个诊断失败,一个实施修改
4. **结果**:下载改进后的技能,附详细变更日志

### ADK 智能体团队

| 智能体 | 角色 | 职责 |
|-------|------|-------------|
| **Executor(执行者)** | 技能运行与打分 | 针对测试场景运行技能,按评估标准给输出打分,并在分析阶段生成初始测试场景 |
| **Analyst(分析师)** | 失败诊断师 | 检查未通过的评估项,定位根因,并推荐一个变更策略。用 Pydantic `output_schema` 保证输出为结构化 JSON |
| **Mutator(变异者)** | 提示词编辑 | 基于分析师的诊断,对技能提示词做且仅做一处针对性修改。用 Pydantic `output_schema` 保证输出为结构化 JSON |

### 优化闭环

- **Executor** 智能体针对所有测试场景运行技能
- **Executor** 随后按"是/否"二值评估标准给每个输出打分
- **Analyst** 智能体诊断失败模式并选择策略(`add_example`、`add_constraint`、`restructure` 或 `add_edge_case`)
- **Mutator** 智能体对技能提示词实施一处外科手术式修改
- **Executor** 重新运行并重新打分修改后的技能
- 分数提升则保留修改,否则回滚
- 重复以上步骤,直到达到目标通过率或最大轮数

## 架构

```
self-improving-agent-skills/
├── backend/                 # FastAPI 服务 + ADK 优化引擎
│   ├── app.py              # REST API 端点 + SSE 流式推送
│   ├── adk_optimizer.py    # 多智能体优化器(Executor、Analyst、Mutator)
│   └── requirements.txt
├── frontend/               # Next.js + React + Tailwind
│   ├── src/
│   │   ├── app/            # 主页面 + 布局
│   │   └── components/     # 上传、配置、运行、结果各步骤组件
│   ├── package.json
│   └── *.config.ts
│   ├── code-reviewer/
│   └── content-writer/
└── README.md
```

## 技术栈

- **后端**:Python 3.10+、FastAPI、Google ADK、Pydantic
- **前端**:Next.js 15、React 19、Tailwind CSS v4、Recharts
- **AI**:基于 Gemini(`gemini-3-flash-preview`)的 Google ADK 多智能体系统——Analyst 与 Mutator 智能体通过 `output_schema` 输出结构化结果
- **实时性**:Server-Sent Events(SSE)实时展示优化进度

## 快速开始

### 后端配置

```bash
cd backend

# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Windows 下用: venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 环境配置(可选——应用会在界面里提示你输入 API Key)
cp .env.example .env
# 编辑 .env,填入你的 GOOGLE_API_KEY

# 启动服务
python app.py
# 服务运行在 http://localhost:8891
```

### 前端配置

```bash
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 应用运行在 http://localhost:3000
```

### 使用

1. 从 [Google AI Studio](https://aistudio.google.com/apikey) 获取 Gemini API Key
2. 打开 http://localhost:3000
3. 上传技能文件夹的 .zip 包(或试试示例)
4. 输入你的 Gemini API Key
5. 检查并编辑生成的测试场景与评估标准
6. 点击"开始优化",围观智能体协作改进你的技能
7. 完成后下载改进版技能

## 技能格式

技能遵循 [agentskills.io](https://agentskills.io) 规范:

```
my-skill/
├── SKILL.md           # 必需:YAML frontmatter + 指令
├── scripts/           # 可选:可执行代码
├── references/        # 可选:补充文档
└── assets/            # 可选:模板、资源
```

SKILL.md 示例:

```markdown
---
name: my-skill
description: 这个技能做什么、何时使用
license: MIT
metadata:
  author: your-name
  version: "1.0"
---

# 我的技能

你的技能指令写在这里……
```

## 试一试

把任意技能文件夹打包成 zip 上传即可——比如本仓库自带的
[project-graveyard](../project-graveyard/):

```bash
cd agent_skills
zip -r project-graveyard.zip project-graveyard/
```

应用的"示例"选择器也会自动列出本仓库中的其他技能——都是真实技能,不是玩具。

## 多智能体优化如何运作

### 1. 分析阶段
**Executor** 智能体分析你的技能并生成:
- 3-4 个多样化的测试场景
- 4-6 条二值评估标准(是/否问题)

优化开始前,你可以编辑、增删场景和标准。

### 2. 基线运行
**Executor** 智能体针对所有场景运行技能,并按所有评估标准打分,确立起始分数。

### 3. 优化闭环
每一轮中,三个智能体协同工作:
1. **Executor** 针对所有测试场景运行技能并给输出打分
2. **Analyst** 检查失败项、定位根因、选择变更策略(经 `output_schema` 返回结构化 JSON)
3. **Mutator** 实施一处具体修改以改进技能(经 `output_schema` 返回结构化 JSON)
4. **Executor** 重新运行并给修改后的技能打分
5. 对比分数——提升则保留修改,否则回滚
6. 重复直到达到目标通过率或最大轮数

### 4. 输出
- 应用了所有成功修改的改进版 SKILL.md
- 详细变更日志:改了什么、为什么改
- 性能对比(基线 vs 最终)

## API 端点

| 方法 | 端点 | 说明 |
|--------|----------|-------------|
| `POST` | `/api/upload` | 上传技能 zip 包(最大 10MB,仅文本文件) |
| `POST` | `/api/upload-files` | 上传多个文件(文件夹上传) |
| `POST` | `/api/analyze` | 生成场景与评估项(需 Gemini API Key) |
| `POST` | `/api/regenerate` | 重新生成场景与评估项 |
| `POST` | `/api/update-config` | 保存用户选择/编辑后的配置 |
| `POST` | `/api/start/{session_id}` | 启动优化 |
| `GET` | `/api/stream/{session_id}` | 优化进度的 SSE 流 |
| `POST` | `/api/stop/{session_id}` | 停止优化 |
| `GET` | `/api/download/{session_id}` | 下载改进版技能 |
| `GET` | `/api/examples` | 列出可用示例技能 |
| `POST` | `/api/examples/{name}/load` | 加载一个示例技能 |
| `GET` | `/api/status/{session_id}` | 轮询式状态端点 |
| `GET` | `/health` | 健康检查 |

## 配置

### 后端

Gemini API Key 由前端随每个请求传入。本地开发时也可在 `.env` 中设置 `GOOGLE_API_KEY`。服务运行在 **8891** 端口。

上传限制:
- 总上传大小最大 **10MB**
- 单文件最大 **1MB**
- 每次上传最多 **50** 个文件
- 仅限文本文件(`.md`、`.txt`、`.json`、`.yaml`、`.py`、`.js`、`.ts` 等)

会话 **1 小时** 后自动过期。

### 前端

API Key 在界面中输入,保存在组件状态里(不持久化),随每个请求发送。Key 传给后端后,由后端设置 `GOOGLE_API_KEY` 供 ADK 智能体鉴权使用。

### 优化参数

在 `RunningStep.tsx` 中调整 `max_rounds`(上限 50):

```typescript
body: JSON.stringify({
  max_rounds: 20,  // 默认:20,上限:50
}),
```

在 `adk_optimizer.py` 中调整模型:

```python
def __init__(self, api_key: str, model: str = "gemini-3-flash-preview"):
```

## 开发

### 后端测试

```bash
cd backend
python -c "from adk_optimizer import SkillOptimizer; print('OK')"
```

### 前端构建

```bash
cd frontend
npm run build
```

### 实时开发

前后端都支持热重载,改完代码立刻生效。

## 基于 Karpathy 的 Autoresearch

本工具把 Andrej Karpathy 的 autoresearch 方法论(用 LLM 迭代改进它们自己的提示词)应用到了智能体技能上。核心思想:与其手动调提示词,不如定义好成功标准,让 AI 自我优化——现在由一组专职 ADK 智能体驱动。

原始概念:[https://github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)
