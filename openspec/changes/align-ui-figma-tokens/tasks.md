# Tasks — Change: align-ui-figma-tokens

Purpose
- 将前端 UI 视觉与 Figma 设计规范对齐，通过设计令牌（Design Tokens）与主题配置实现可维护的全站一致性。

Status
- 状态：in-progress
- 负责人：frontend
- 变更来源：UI 视觉对齐作为第一个变更
- 关联：proposal.md（同目录，待补）、design.md（同目录，待补）

Scope
- Token 层：颜色、字体、半径等
- 主题层：Tailwind 主题扩展，便于直接使用类名
- 组件层：Button 首批落地，后续逐步迁移其它组件

Checklist
- [x] 设计令牌：在 src/lib/design-tokens.ts 中加入 Figma 品牌色与字体（Primary Dark Blue、Blue Light/Lightest、Accent Yellow、Base Black/Gray、White Stroke；Plus Jakarta Sans）
- [x] Tailwind 主题：在 tailwind.config.ts 暴露扁平键名颜色（primary-dark-blue、primary-blue-light、primary-blue-lightest、accent-yellow、base-black、base-gray、white-stroke）
- [x] 组件重构：Button.tsx 变体使用品牌色（primary/secondary/outline/ghost）并统一 focus ring
- [x] 全局字体：在 app/layout.tsx 使用 next/font 加载 Plus Jakarta Sans（400/500/600/700）
- [ ] 可视验收（QA）：本地跑 dev，检查首页 Hero、CTA、浅蓝背景块、黑/灰文字对比度与 Figma 一致性
- [ ] 组件迁移（第一批）：Header/Footer 与 Landing 各 Section 中仍直接使用原 teal 类名的元素，替换为品牌色类或复用 Button
- [ ] 文档与迁移指引：在 docs 或 memory-bank 中补充使用范式与替换建议
- [ ] 截图与验收记录：关键页面（首页/服务/联系）前后对比；记录对齐结论

Acceptance Criteria
- Tailwind 可直接使用品牌色类名（例如 bg-primary-dark-blue、border-white-stroke）
- Button 视觉符合 Figma（主色、悬停/按压、描边、阴影一致）
- 全局字体为 Plus Jakarta Sans（含 400/500/600/700 权重）
- 关键页面 CTA 与主视觉块颜色一致且有足够对比度

Notes
- 为兼容历史代码，primary（teal 梯度）仍保留；后续逐步替换为品牌色类名
- 支持透明度语法（如 bg-primary-dark-blue/90）用于 hover/active 分层
- 如需归档，请在完成 Checklist 后将本变更移动至 openspec/changes/archive/ 并更新 specs

Progress Evidence (code refs)
- tailwind.config.ts：新增品牌色键名
- src/components/ui/Button.tsx：变体与 focus ring 改为品牌色
- src/app/layout.tsx：注入 Plus Jakarta Sans
- src/lib/design-tokens.ts：新增品牌色与字体配置
