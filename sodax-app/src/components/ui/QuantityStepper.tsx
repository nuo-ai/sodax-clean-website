'use client'

/**
 * QuantityStepperProps 定義數量步進器的互動介面。
 */
export interface QuantityStepperProps {
  /**
   * 當前顯示的數量值，須由父層控制。
   */
  value: number
  /**
   * 點擊遞增按鈕時觸發的回呼。
   */
  onIncrement?: () => void
  /**
   * 點擊遞減按鈕時觸發的回呼。
   */
  onDecrement?: () => void
}

/**
 * QuantityStepper 提供 CheckboxQuant 使用的數量調整 UI。
 * - 僅提供視覺與事件回呼，不處理邏輯限制。
 * - 風格參照 Figma Design Tokens。
 */
export function QuantityStepper({ value, onIncrement, onDecrement }: QuantityStepperProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200"
        onClick={onDecrement}
        aria-label="減少數量"
      >
        <span className="text-body-md font-bold leading-none">-</span>
      </button>
      <span className="w-6 text-center text-body-md font-bold text-grayscale-900">{value}</span>
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-grayscale-100 text-grayscale-700 hover:bg-grayscale-200"
        onClick={onIncrement}
        aria-label="增加數量"
      >
        <span className="text-body-md font-bold leading-none">+</span>
      </button>
    </div>
  )
}
