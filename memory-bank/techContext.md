# 技術背景 (techContext.md) - v1.0

## 1. 核心技術棧 (Core Stack)
*   **框架 (Framework):** Next.js (使用 App Router)
*   **語言 (Language):** TypeScript
*   **樣式 (Styling):** Tailwind CSS

## 2. 開發與構建工具 (Tooling)
*   **包管理器 (Package Manager):** 待定 (默認為 npm，可根據用戶偏好更換為 yarn 或 pnpm)。
*   **代碼格式化 (Code Formatting):** Prettier (遵循社區通用配置)。
*   **代碼檢查 (Linting):** ESLint (使用 Next.js 推薦的配置)。

## 3. 設計與實現模式 (Design & Implementation)
*   **設計系統來源 (Source of Truth):** 嚴格遵循 Figma Style Guide 中定義的 Design Tokens (Colors, Typography, Icons)。不允許使用魔術數字或硬編碼的樣式值。
*   **國際化 (i18n):** 計劃使用 `next-intl` 庫來管理和實現中英文雙語功能。
*   **漸進式網路應用 (PWA):** 將配置標準的 Web App Manifest (`manifest.json`) 和 Service Worker，以實現「添加到主螢幕」和離線訪問能力。

## 4. 技術約束與決策 (Constraints & Decisions)
*   **嚴禁自定义設計:** 所有 UI 組件必須 1:1 還原 Figma 設計。任何需要新建的組件，必須先有文字版的「設計規格 (Design Spec)」。
*   **JSDoc:** 所有導出的函數和組件都必須包含中文 JSDoc 註釋，以解釋其用途、參數和返回值。
