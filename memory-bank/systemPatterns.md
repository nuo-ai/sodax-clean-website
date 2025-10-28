# 系統模式 (systemPatterns.md) - v1.0

## 1. 項目結構 (Project Structure)
本項目將遵循分層的、功能導向的文件結構。

*   **/app/[locale]/**
    *   **用途:** 存放所有國際化路由頁面。`[locale]` 是一個動態段，用於捕獲 `en` 或 `zh`。
    *   **示例:** `/app/en/about/page.tsx`, `/app/zh/services/page.tsx`。

*   **/components/ui/**
    *   **用途:** 存放最基礎、可重用的 UI 組件，它們是構成界面的原子元素。這些組件應嚴格遵循 Figma 的 Design Tokens，不包含任何業務邏輯。
    *   **示例:** `Button.tsx`, `Input.tsx`, `Icon.tsx`, `Card.tsx`。

*   **/components/features/**
    *   **用途:** 存放與特定業務功能相關的組合組件。這些組件通常由多個 `ui` 組件構成。
    *   **示例:** `PriceCalculator.tsx`, `ServiceBookingForm.tsx`。

*   **/components/layout/**
    *   **用途:** 存放頁面級別的佈局組件。
    *   **示例:** `Header.tsx`, `Footer.tsx`, `Sidebar.tsx`。

*   **/lib/** 或 **/utils/**
    *   **用途:** 存放通用的輔助函數、工具庫實例或類型定義。
    *   **示例:** `cn.ts` (用於 `clsx` 和 `tailwind-merge`), `i18n.ts` (國際化配置)。

*   **/styles/**
    *   **用途:** 存放全局樣式文件，如 `globals.css`。

*   **/public/**
    *   **用途:** 存放靜態資源，如圖片、字體和 `manifest.json`。

## 2. 組件開發模式 (Component Development)
*   **原子設計 (Atomic Design):**
    1.  **原子 (Atoms):** 從 `components/ui` 中的最小單元開始，如 `Icon`, `Button`。
    2.  **分子 (Molecules):** 將原子組合成更複雜的單元，如一個包含圖標、標題和描述的卡片。
    3.  **生物 (Organisms):** 將分子組合成完整的頁面區塊，如頁頭 `Header` 或 `PriceCalculator`。
*   **伺服器組件优先 (Server Components First):** 盡可能使用 Next.js 的伺服器組件來獲取和顯示靜態內容，以優化性能。
*   **客戶端組件界限 (Use Client Boundary):** 僅在需要交互（如 `onClick`, `useState`）的組件中使用 `"use client"` 指令，並盡可能將其限制在組件樹的“葉子”節點。

## 3. 數據流 (Data Flow)
*   **靜態內容:** 通過伺服器組件在構建時或請求時獲取。
*   **客戶端狀態:** 使用 React Hooks (`useState`, `useReducer`) 進行管理。對於跨組件的複雜狀態，可考虑使用 `React Context`。
*   **表單處理:** 使用如 `react-hook-form` 配合 `zod` 進行表單狀態管理和驗證。
