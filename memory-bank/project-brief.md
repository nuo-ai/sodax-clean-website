# 項目簡報 (projectbrief.md) - v1.0

## 1. 項目名稱
sodax clean 清潔服務 PWA 網站

## 2. 項目使命 (Objective)
我购买了一份名為 "Qlinest" 的 Figma 視覺設計模板，轉化為一個功能齊全、中英雙語、響應式的漸進式網路應用 (PWA)。

## 3. 核心範圍 (Core Scope)

### 3.1. 基礎
* **Figma 轉代碼:** 1:1 實現 Figma 模板中的所有現有頁面 (Home, About, Services, Service Details, Contact)。
* **技術棧:** Next.js (App Router), TypeScript, Tailwind CSS。
* **設計真理之源:** 嚴格遵守 Figma `Style Guide` 頁面中的 Design Token (Colors, Typography, Icons)。

### 3.2. 關鍵客製化功能
1.  **自助價格計算器 (Calculator):**
    * 建立一個全新的頁面/組件。
    * 用戶可通過表單選項（如房型、額外服務）即時計算清潔服務的預估總價。
    * **(注意：具體商業邏輯待 `productContext.md` 中定義)**。
2.  **中英雙語 (i18n):**
    * 實現完整的國際化支持。
    * **英文版 (EN):** 作為 PWA，主要面向國際用戶（類 App 體驗）。
    * **中文版 (ZH):** 主要面向中文用戶（如留學生）。
3.  **響應式 PWA:**
    * 網站必須在桌面端 (Desktop) 和移動端 (Mobile) 上完美顯示（基於 Figma 的 1440px 和 390px 視圖）。
    * 網站需配置為 PWA，允許用戶「添加到主螢幕」。

## 4. 核心工作流與規則 (Rules of Engagement)
1.  **Figma 優先:**
    * 所有新組件 (如計算器) 必須先由「總參謀長 (Gemini)」在 `productContext.md` 或 `systemPatterns.md` 中撰寫**文字版「設計規格 (Design Spec)」**。
    * AI 編程工具 (Cline) **嚴禁**自行設計，必須嚴格按照「設計規格」和 Figma Token 施工。
2.  **原子化任務 (Atomic Tasks):**
    * 「指揮官 (User)」將把任務拆解為最小單元（例如：「建立 Button.tsx 組件」）來指派。
3.  **文檔驅動:**
    * 所有 AI 生成的代碼必須包含中文 JSDoc 註釋，以確保可維護性。
    * `Memory Bank` (特別是 `activeContext.md` 和 `progress.md`) 是所有 AI 工作的唯一上下文來源。