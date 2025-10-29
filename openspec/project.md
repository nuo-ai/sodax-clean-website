# Project Context

## Purpose
Sodax Clean 是一个面向悉尼地区的专业清洁服务网站，目标是：
- 吸引潜在客户（营销着陆页、服务与优势展示、客户评价、博客）
- 提供中英文（en/zh）双语体验与国际化路由
- 提供“退租清洁费用试算器”（Calculator）进行基础定价估算
- 引导用户通过“联系/获取报价”进行线索收集（后续将接入邮件发送或外部表单服务）
- 保持良好的性能、SEO 可见性和可访问性

## Tech Stack
- Next.js 14（App Router）
- TypeScript 5 + React 18
- next-intl 4（国际化）
- Tailwind CSS 3 + PostCSS + autoprefixer
- ESLint（eslint-config-next）+ Prettier
- 部署目标：Vercel 或同类 Node 运行环境（待确认）

## Project Conventions

### Code Style
- 使用 Prettier 统一格式；ESLint 规则基于 next
- TypeScript：严格类型优先；组件 Props 使用显式类型
- 命名：
  - 组件文件使用 PascalCase（如 Button.tsx、Header.tsx）
  - 工具/库文件使用 kebab-case 或 camelCase（如 utils.ts、design-tokens.ts）
  - 目录按功能分层：app/[locale]/(pages...) + components/(layout|landing|features|ui)
- 导入路径：
  - 使用别名 @ 指向 src 根（例如 `@/components/ui/Button`）
- 样式：
  - Tailwind 原子类 + `src/lib/design-tokens.ts` 作为设计变量归档

### Architecture Patterns
- Next.js App Router + 路由分段
  - [locale] 动态段（en/zh）+ `/api/locale` 进行 Cookie 切换
  - 公共布局 `src/app/layout.tsx` + 本地化布局 `src/app/[locale]/layout.tsx`
- 组件分层
  - layout：页级布局、Header/Footer
  - landing：落地页模块（WhyChooseUs/ServicesCards/...）
  - features：业务模块（Calculator 等）
  - ui：通用可复用基础组件（Button/Input/Dropdown 等）
- i18n：next-intl（`messages/en.json` & `messages/zh.json`；服务器端 `getTranslations` + 客户端 `useTranslations`）
- 资源与样式：`public/` 静态资源 + Tailwind 全局样式

### Testing Strategy
- 当前：未引入自动化测试框架
- 计划（建议）：
  - 单元/组件：Vitest + Testing Library（含基本快照与交互测试）
  - 端到端：Playwright（关键转化路径：语言切换、Calculator、Contact 提交）
  - Lint + Type-check 作为 CI 基础门禁
- 验收建议：在 OpenSpec 的 `tasks.md` 中加入验证步骤与可观测指标

### Git Workflow
- 建议采用 Trunk-based + 短分支（`feature/*`）
- 提交规范：Conventional Commits（feat/fix/docs/chore/refactor/test 等）
- PR 审查：小步改动优先，PR 内链接 OpenSpec change-id，并引用相关 spec/requirement

## Domain Context
- 业务：家政/退租清洁服务（悉尼地区）
- 落地页目标：突出服务优势、流程、口碑案例，促进转化（获取报价/联系）
- Calculator：以可配置的房型与附加项计算预估价，特殊项需人工跟进
- 多语言：en/zh 双语，语言切换位于 Header，并通过 Cookie + 路由段生效
- SEO：地区关键词、服务关键词（建议后续加入 sitemap、robots、元数据增强）

## Important Constraints
- 性能与可访问性（Core Web Vitals）
- 内容与价格展示需清晰准确，特殊报价避免误导
- 隐私与合规：不持久保存敏感个人信息（如邮箱/电话），如需邮件发送应避免在客户端暴露密钥
- 简化后端：优先 Serverless/第三方服务（如邮件 API），后续再引入数据库

## External Dependencies
- 国际化：next-intl
- 样式系统：Tailwind CSS
- （计划）邮件发送服务：Resend/SendGrid/SES（三选一，待确认）
- 第三方分析/追踪（可选）：Plausible 或 GA（待确认）
