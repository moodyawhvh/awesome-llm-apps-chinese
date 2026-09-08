> 🌐 本文档由 [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) 翻译,英文原版见原项目。

# 🔍 带可验证引用的知识图谱 RAG

一个 Streamlit 应用,演示基于**知识图谱的检索增强生成(RAG)**如何实现多跳推理,并为每个结论提供完全可验证的来源归属。

## 🎯 有什么不同?

传统基于向量的 RAG 只能找到相似的文本块,但难以应对:
- 需要综合多份文档信息的问题
- 复杂的推理链
- 为每条结论提供可验证来源

**知识图谱 RAG** 这样解决这些问题:
1. **从文档构建结构化图谱**:实体与关系
2. **遍历连接**寻找相关信息(多跳推理)
3. **追踪出处**,让每条结论都能回溯到来源

## ✨ 功能特性

| 特性 | 说明 |
|---------|-------------|
| 🔗 **多跳推理** | 遍历实体关系,回答复杂问题 |
| 📚 **可验证引用** | 每条结论都附来源文档与原文 |
| 🧠 **推理轨迹** | 清晰展示答案是如何推导出来的 |
| 🏠 **完全本地化** | 用 Ollama 跑 LLM,Neo4j 做图存储 |

## 🚀 快速开始

### 前置条件

1. **Ollama** - 本地 LLM 推理
   ```bash
   # 从 https://ollama.ai 安装
   ollama pull llama3.2
   ```

2. **Neo4j** - 知识图谱数据库
   ```bash
   # 使用 Docker
   docker run -d \
     --name neo4j \
     -p 7474:7474 -p 7687:7687 \
     -e NEO4J_AUTH=neo4j/password \
     neo4j:latest
   ```

### 安装

```bash
# 克隆并进入目录
cd knowledge_graph_rag_citations

# 安装依赖
pip install -r requirements.txt

# 运行应用
streamlit run knowledge_graph_rag.py
```

## 📖 工作原理

### 第 1 步:文档 → 知识图谱

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   文档          │ ──► │   LLM 抽取       │ ──► │   知识图谱      │
│   (文本/PDF)    │     │  (实体+关系)     │     │   (Neo4j)       │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

LLM 抽取:
- **实体**:人物、组织、概念、技术
- **关系**:实体之间如何关联(如 "works_for"、"created"、"uses")
- **出处**:每次抽取对应的来源文档和文本块

### 第 2 步:查询 → 多跳遍历

```
┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌───────────┐
│  查询   │ ──► │  定位起始    │ ──► │  遍历       │ ──► │ 上下文    │
│         │     │   实体      │     │  关系       │     │ + 来源    │
└─────────┘     └─────────────┘     └─────────────┘     └───────────┘
```

### 第 3 步:回答 → 带验证的引用

```
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐
│ 上下文      │ ──► │   生成      │ ──► │  带引用的回答     │
│ + 来源      │     │   回答      │     │   [1][2]         │
└─────────────┘     └─────────────┘     └──────────────────┘
                                                │
                                                ▼
                                        ┌──────────────────┐
                                        │    引用详情       │
                                        │ • 来源文档       │
                                        │ • 来源原文       │
                                        │ • 推理路径       │
                                        └──────────────────┘
```

## 🖥️ 用法示例

### 1. 添加文档

粘贴或选择示例文档,系统会抽取实体和关系:

```
文档:"GraphRAG was developed by Microsoft Research. 
           Darren Edge led the project..."

抽取结果:
  ├── 实体: GraphRAG (技术)
  ├── 实体: Microsoft Research (组织)  
  ├── 实体: Darren Edge (人物)
  └── 关系: Darren Edge --[WORKS_FOR]--> Microsoft Research
```

### 2. 提问

```
问题:"GraphRAG 是谁开发的?他们来自什么组织?"
```

### 3. 获得带验证的回答

```
回答:GraphRAG 由 Microsoft Research 的研究人员开发 [1],
        项目由 Darren Edge 牵头 [2]。

引用:
  [1] 来源: AI Research Paper
      原文: "GraphRAG is a technique developed by Microsoft Research..."
      
  [2] 来源: AI Research Paper  
      原文: "...introduced by researchers including Darren Edge..."
```

## 🔧 配置

| 配置项 | 默认值 | 说明 |
|---------|---------|-------------|
| Neo4j URI | `bolt://localhost:7687` | Neo4j 连接串 |
| Neo4j 用户名 | `neo4j` | 数据库用户名 |
| Neo4j 密码 | - | 数据库密码 |
| LLM 模型 | `llama3.2` | 用于抽取/生成的 Ollama 模型 |

## 🏗️ 架构

```
knowledge_graph_rag_citations/
├── knowledge_graph_rag.py   # 主 Streamlit 应用
├── requirements.txt         # Python 依赖
└── README.md               # 本文件
```

### 核心组件

- **`KnowledgeGraphManager`**:Neo4j 图操作接口
- **`extract_entities_with_llm()`**:基于 LLM 的实体/关系抽取
- **`generate_answer_with_citations()`**:带出处追踪的多跳 RAG

## 🎓 延伸阅读

本示例受 [VeritasGraph](https://github.com/bibinprathap/VeritasGraph) 启发,这是一个企业级框架,提供:
- 本地部署的知识图谱 RAG
- 可视化推理轨迹(Veritas-Scope)
- LoRA 微调 LLM 集成

## 📝 许可证

MIT License
