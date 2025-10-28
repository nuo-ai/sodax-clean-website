# 設計規格：價格計算器 (calculator-spec.md) - v1.0

## 1. 概述
本文檔定義了 `PriceCalculator` 功能的設計規格。AI 工程師必須嚴格按照此規格，並結合 `tailwind.config.ts` 中的 Design Token 進行開發。

## 2. 依賴
* **商業邏輯:** `productContext.md` v1.1
* **Design Token:** `tailwind.config.ts` v1.0

## 3. 組件詳細規格

### 3.1. `CalculatorStep` (組件)
* **用途:** 包裹每一個步驟（例如「步驟 1：選擇房型」）。
* **設計 (Tailwind Class):**
    * `div`：`flex items-center gap-4`
    * `div`（步驟序號）：`flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white font-display font-bold`
    * `h3`（步驟標題）：`text-heading-md font-display text-grayscale-900`

### 3.2. `Dropdown` (組件 - 需新建)
* **用途:** 用於「步驟 1：選擇房型」。
* **位置:** `src/components/ui/Dropdown.tsx`
* **設計 (Tailwind Class):**
    * **觸發按鈕：** `button`：`w-full p-4 border border-grayscale-200 bg-grayscale-50 rounded-lg text-left flex justify-between items-center`
    * **菜單容器：** `div`：`w-full mt-2 bg-white rounded-lg shadow-card-lg border border-grayscale-200`
    * **菜單項：** `div`：`flex justify-between p-4 hover:bg-grayscale-50`
        * 服務名稱：`span`：`text-body-md text-grayscale-800`
        * 價格：`span`：`text-body-md font-bold text-grayscale-900`

### 3.3. `CheckboxQuant` (組件 - 需新建)
* **用途:** 用於「步驟 2：額外項目」（帶數量選擇器）。
* **位置:** `src/components/features/CheckboxQuant.tsx`
* **設計 (Tailwind Class):**
    * 容器：`div`：`w-full p-4 border border-grayscale-200 rounded-lg flex items-center justify-between`
    * **左側：** `div`：`flex items-center gap-3`
        * `Checkbox`：可使用原生 `input[type=checkbox]` 結合 `rounded-sm text-primary-500`
        * 文案區塊：`div`：`flex flex-col`
            * 標題：`label`：`text-body-md font-bold text-grayscale-900`
            * 副文字：`span`：`text-body-sm text-grayscale-500`
    * **右側（勾選後顯示）：** `QuantityStepper` 組件（參考 3.4 規格）

### 3.4. `QuantityStepper` (組件 - 需新建)
* **用途:** `CheckboxQuant` 的子組件。
* **位置:** `src/components/ui/QuantityStepper.tsx`
* **設計 (Tailwind Class):**
    * 容器：`div`：`flex items-center gap-2`
    * 減號按鈕：`button`：`w-8 h-8 rounded-full bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200`
    * 數量顯示：`span`：`text-body-md font-bold w-6 text-center`
    * 加號按鈕：`button`：`w-8 h-8 rounded-full bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200`

### 3.5. `CheckboxSimple` (組件 - 需新建)
* **用途:** 用於「步驟 3：特殊項目」。
* **位置:** `src/components/features/CheckboxSimple.tsx`
* **設計 (Tailwind Class):**
    * `div`：`w-full p-4 border border-grayscale-200 rounded-lg flex items-center gap-3`
    * 文案同 `CheckboxQuant`，不包含數量選擇器

### 3.6. `PriceSummary` (組件 - 需新建)
* **用途:** 頁面滾動時吸附在視窗底部（行動版）或側邊（桌面版）。
* **位置:** `src/components/features/PriceSummary.tsx`
* **設計 (Tailwind Class):**
    * 容器：`div`：`sticky bottom-0 md:top-10 w-full p-6 bg-white rounded-t-lg md:rounded-lg shadow-overlay`
    * 標題：`span`：`text-body-md text-grayscale-500`
    * 價格：`div`：`text-heading-lg font-bold text-primary-500`
    * 行動按鈕：`Button`（引用 `src/components/ui/Button.tsx`）：`w-full mt-4`，文字為「立即預訂」
