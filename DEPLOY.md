# 部署指南

"邪修菜单" 是一个纯静态网站项目，不依赖任何后端服务，因此可以非常轻松地部署到几乎任何静态托管平台。这里我们推荐两种免费、快速且强大的部署方式：GitHub Pages 和 Cloudflare Pages。

---

## 方式一：使用 GitHub Pages (最简单)

GitHub Pages 是 GitHub 官方提供的静态网站托管服务，与你的代码仓库无缝集成。

**优点**:
- 与代码仓库在同一平台，管理方便。
- 配置极其简单，几下点击即可完成。

**步骤**:

1.  **确保你的代码已推送到 GitHub 仓库。**

2.  **进入仓库设置**: 在你的 GitHub 仓库页面，点击右上角的 `Settings` (设置)。

3.  **选择 Pages**: 在左侧导航栏中，找到并点击 `Pages`。

4.  **配置发布源 (Source)**:
    - 在 `Branch` (分支) 下拉菜单中，选择 `main` (或者你的主分支)。
    - 文件夹通常选择 `/(root)` 即可。
    - 点击 `Save` (保存)。

5.  **完成**: 等待几分钟，GitHub 会自动为你构建并部署网站。页面顶部会显示你的网站地址，格式通常为 `https://<你的用户名>.github.io/<仓库名>/`。

> **注意**: 每次你向 `main` 分支推送新的提交，GitHub Pages 都会自动重新部署，更新你的网站。

---

## 方式二：使用 Cloudflare Pages (推荐, 速度更快)

Cloudflare Pages 是 Cloudflare 提供的静态网站托管服务，它利用其全球 CDN 网络，可以提供极快的访问速度和更高的安全性。

**优点**:
- 全球 CDN 加速，国内外访问速度都非常快。
- 提供免费的 SSL 证书、自定义域名绑定、访问分析等高级功能。
- 每次部署都有独立的预览链接，方便在合并前检查改动。

**步骤**:

1.  **注册并登录 Cloudflare**: 你需要一个 [Cloudflare 账户](https://dash.cloudflare.com/sign-up)。

2.  **进入 Pages 管理页面**:
    - 在 Cloudflare 主面板，点击左侧的 `Workers & Pages`。
    - 选择 `Create application` -> `Pages` -> `Connect to Git`。

3.  **连接到你的 GitHub 账户**: 授权 Cloudflare 访问你的 GitHub 仓库，然后选择 "邪修菜单" 的仓库。

4.  **配置构建和部署**:
    - **项目名称**: 可以保持默认或自定义。
    - **生产分支**: 选择 `main`。
    - **构建设置**: 这是最关键的一步，因为我们是纯静态网站，所以**不需要任何构建命令**。
        - **框架预设 (Framework preset)**: 选择 `None`。
        - **构建命令 (Build command)**: **留空**。
        - **构建输出目录 (Build output directory)**: 填写 `/` 或者 `.`，表示使用仓库的根目录。

5.  **保存并部署 (Save and Deploy)**: 点击按钮，Cloudflare 会立刻开始部署你的网站。首次部署大约需要一分钟。

6.  **完成**: 部署成功后，Cloudflare 会提供一个格式为 `<项目名>.pages.dev` 的域名供你访问。你也可以在设置中绑定自己的域名。

> 之后，每次你向 `main` 分支推送提交，Cloudflare Pages 同样会自动拉取最新代码并完成部署。
