# 贡献指南

我们非常欢迎你为 "邪修菜单" 项目做出贡献！你的每一个想法、每一个食谱，都是对这场 "懒人烹饪革命" 的巨大支持。

在开始之前，请花几分钟阅读以下指南。

## 如何贡献？

你可以通过以下几种方式为项目添砖加瓦：

1.  **提出新食谱建议** (最简单)
2.  **报告 Bug 或提出改进建议**
3.  **直接贡献代码** (添加食谱、修复 Bug 等)

## 提出新食谱建议

如果你有一个绝妙的 "邪修" 食谱，但不想或不方便修改代码，最好的方式是创建一个 [新的 Issue](https://github.com/your-username/evil-cooking-menu/issues/new/choose)。

请使用我们的 **"新食谱提议"** 模板，并尽量详细地填写以下信息：

- **菜品名称**: 给你的菜起一个响亮又邪性的名字。
- **所属流派**: 它是属于法器流、丹药流、诡道流还是无招流？
- **所需材料**: 清晰列出所有食材和调味品。
- **修炼步骤**: 详细描述烹饪过程，秉持 "邪修" 精神——步骤越简单越好！
- **备注 (可选)**: 任何需要注意的 "心魔" 或 "渡劫心法"。

## 报告 Bug 或提出改进建议

如果你发现网站有任何问题，或者对网站功能、设计有任何想法，也请通过 [Issue](https://github.com/your-username/evil-cooking-menu/issues/new/choose) 告诉我们。请选择 **"Bug 报告"** 模板。

## 贡献代码指南

如果你想亲自动手，我们万分欢迎！

### 添加新食谱

1.  **Fork** 本项目到你的 GitHub 账户。
2.  **Clone** 你 Fork 后的项目到本地。
3.  **创建新分支**: `git checkout -b feature/add-new-recipe-name`
4.  **修改代码**: 打开 `scripts/main.js` 文件，在 `recipes` 数组中，仿照现有格式添加你的食谱对象。

    一个食谱对象应该包含以下字段：
    ```javascript
    {
        title: '你的菜品名称',      // 菜名
        category: 'faqiliu',      // 所属流派的 ID (faqiliu, danyaoliu, guidaoliu, wuzhaoliu)
        categoryName: '法器流',   // 所属流派的中文名
        icon: '🌶️',               // 一个能代表菜品的 Emoji
        description: '一句话描述这道菜的精髓',
        difficulty: '入门',       // 难度: 入门, 进阶, 冒险, 地狱
        time: '≈10分钟'           // 大约耗时
    }
    ```
5.  **提交你的修改**: `git commit -m "feat: 添加新食谱 '你的菜品名称'"`
6.  **Push 到你的分支**: `git push origin feature/add-new-recipe-name`
7.  **创建 Pull Request**: 回到你的 GitHub 项目页面，发起一个 Pull Request 到主项目的 `main` 分支。请在 PR 的描述中简要说明你添加的食谱。

### 行为准则

在参与社区贡献时，请务必遵守我们的 [行为准则 (Code of Conduct)](./CODE_OF_CONDUCT.md)。我们的目标是建立一个开放、包容、友好的社区环境。

感谢你的贡献！
