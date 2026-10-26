# Developer Hub

[English](README.md) | 简体中文

一个基于 Astro 的个人作品集、博客与可打印简历起点。页面和交互来自维护仓库，个人数据已替换为默认值。

## 开始使用

使用 Node.js 22 和 pnpm 10.14.0：

```bash
pnpm install --frozen-lockfile
pnpm dev
```

打开 http://localhost:4321。无需配置环境变量。

## 修改配置与内容

- 在 `src/config/profile.mjs` 填写姓名、简介、联系方式、经历和技能。
- 在 `src/config/site.mjs` 修改站点名称、实际域名、语言、时区和 Logo。
- `src/config/integrations.mjs` 中的评论、浏览量和 GitHub 贡献默认关闭，按需配置后启用。
- 文章和项目目录默认留空。使用 `pnpm new:post --title "My Post"` 或 `pnpm new:project --title "My Project"` 创建内容。
- 新文章默认为草稿，默认语言为 zh-CN；项目会以 in-progress 状态进入生产构建。发布前检查 frontmatter。

详细说明见[配置指南](docs/personalization.zh-CN.md)。

## 验证与部署

执行 `pnpm verify`，再用 `pnpm build` 生成网站静态文件到 `dist/`。当前支持域名根路径部署，子目录部署尚未适配。

GitHub Actions 自动执行检查。Pages 部署仅支持手动触发：先设置真实域名、启用仓库 Pages 的 GitHub Actions 发布源，再运行部署工作流。模板不包含定时贡献同步工作流，CLI 同步命令仍可在配置后使用。

本仓库的源码、配置和内容可以正常通过 Git 管理。维护者应在主仓库修改通用实现，再生成和更新本仓库；这里不包含生成器自身。

## 发布说明

请替换默认资料并检查所有链接。本项目采用 [MIT 许可证](LICENSE)。添加第三方代码或素材时，请遵守其各自的许可证。
