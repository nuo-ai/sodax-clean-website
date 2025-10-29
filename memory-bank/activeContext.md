# 當前工作上下文 (activeContext.md) - v1.7

## 1. 當前狀態 (Current State)
`task-402` (價格計算器組裝) 已成功完成。功能齊全的計算器頁面位於 `/src/app/(en)/calculator/page.tsx`。項目現在需要實現中英雙語支持，以滿足核心需求。

## 2. 當前工作焦點 (Current Focus)
* **任務 (已完成):** `task-403-fix` - 修復開發伺服器啟動問題並建立項目文檔 ✅
* **任務 (當前):** `task-403` - 實現國際化 (i18n) 中英雙語支持。

## 3. 最近變更 (Recent Changes)
* **已完成:** v0.3 頁面實現階段 - 4 個核心頁面全部完成
* **已完成:** 實時預覽環境配置 (`pnpm run dev`)
* **已修復:** CSS 路徑問題 (`layout.tsx` 中的 globals.css 導入)
* **✅ 已整合:** 從 Figma 提取 Design Tokens 並更新 `tailwind.config.ts`
* **✅ 已完成:** `task-302` 全數 UI 組件開發
* **✅ 已完成:** `task-402` 建立計算器頁面與價格邏輯
* **✅ 已修復:** `task-403-fix` 開發伺服器圖片域名配置問題

## 4. 下一步計劃 (Next Steps)
1. **[AI 工程師]** 嘗試啟動開發伺服器以診斷問題。
2. **[AI 工程師]** 根據錯誤日誌修復問題。
3. **[AI 工程師]** 建立 `README.md` 並添加啟動說明。
4. **[指揮官 User]** 驗證伺服器是否能成功啟動。
5. **[AI 工程師]** 重新開始 `task-403` (國際化)。

## 5. 重要決策與注意事項 (Decisions & Notes)
* **邏輯來源:** `productContext.md` v1.1 為價格計算邏輯的唯一依據。
* **UI 來源:** `task-302` 產出的 6 個組件須重複使用。
* **風格來源:** `tailwind.config.ts` 為唯一設計 Token 來源。
* **環境:** 項目位於 `./sodax-app/`，以 `pnpm run dev` 啟動預覽。
* **i18n 框架:** 必須使用 `next-intl` 實作。

## 6. 客戶自助報價核心旅程摘要 (Self-service Quote Journey)
1. **Step 1 – General information**
   * 使用者選擇清潔類型（General、Deep、End of Lease/Bond、Hourly）；選擇後展開 Step 1 表單。
   * 表單要求填入 Bedrooms、Storeys、Bathrooms、Laundries 四項數值；任一按鈕點擊即高亮並同步更新右側估價摘要。
   * 「What’s included」按鈕展示 Bond Clean 涵蓋範圍（臥室、廚房、浴室、窗戶、爐具等詳細清單，附跳轉 FAQ page 連結）。
   * 「Cleaning Checklists」連結另開 FAQ & Checklists 頁面，提供完整清單與附加服務價格。
2. **Step 2 – Customise your service**
   * 顯示多個可選附加項卡片（深度清潔、地毯蒸洗、牆面清洗、玻璃門、百葉窗、冰箱/洗碗機內部、陽台、車庫、跳蚤處理等）。
   * 每張卡片可點擊查看說明 tooltip，選擇狀態會反映在 Quote Summary（金額疊加）。
3. **Step 3 – Booking details**
   * 顯示日期時間選擇器（未選日期前時間按鈕禁用；選定日期後需選時間與是否靈活等問題）。
   * 收集聯絡資訊（姓名、email、電話）、地址（單位、街道、郵編、城市、州）。
   * 額外資訊包含入場方式、停車情況、是否有寵物、物業是否為空房、補充備註等單選/複選與多行文本。
   * 在必填項未完成前，「Next」按鈕保持禁用；完成後方可進入 Step 4（付款/確認流程，頁面未進一步探索）。

> 推導：最終要實作的流程需對應上述三大步驟的資料結構、狀態同步與跨頁面狀態持久化，並處理外部鏈接（FAQ）及 tooltip 內容呈現。
