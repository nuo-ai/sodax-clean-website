'use client'

import { useState } from 'react'
import { QuantityStepper, type QuantityStepperProps } from '../ui/QuantityStepper'

/**
 * CheckboxQuantProps 定義含數量調整的勾選項目。
 */
export interface CheckboxQuantProps {
  /**
   * 勾選框標題，如「地毯清潔」。
   */
  title: string
  /**
   * 副文字，描述價格或說明，如「$70 / 處」。
   */
  description?: string
  /**
   * 初始是否被選取。
   */
  defaultChecked?: boolean
  /**
   * 初始數量，預設為 1。
   */
  defaultQuantity?: number
  /**
   * 變更勾選狀態時的回呼。
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * 變更數量時的回呼。
   */
  onQuantityChange?: (quantity: number) => void
}

/**
 * CheckboxQuant 為含數量步進器的附加服務選項。
 * - 依規格使用 Tailwind Token。
 * - 本組件僅處理 UI 與基本互動，不含商業邏輯。
 */
export function CheckboxQuant({
  title,
  description,
  defaultChecked = false,
  defaultQuantity = 1,
  onCheckedChange,
  onQuantityChange,
}: CheckboxQuantProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const [quantity, setQuantity] = useState(defaultQuantity)

  const handleToggle = () => {
    const next = !checked
    setChecked(next)
    onCheckedChange?.(next)
  }

  const handleQuantity = (next: number) => {
    if (next < 1) return
    setQuantity(next)
    onQuantityChange?.(next)
  }

  const stepperProps: QuantityStepperProps = {
    value: quantity,
    onIncrement: () => handleQuantity(quantity + 1),
    onDecrement: () => handleQuantity(quantity - 1),
  }

  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-grayscale-200 p-4">
      <label className="flex flex-1 items-center gap-3">
        <input
          type="checkbox"
          className="h-5 w-5 rounded-sm border-grayscale-300 text-primary-500 focus:ring-primary-500"
          checked={checked}
          onChange={handleToggle}
        />
        <div className="flex flex-col">
          <span className="text-body-md font-bold text-grayscale-900">{title}</span>
          {description ? <span className="text-body-sm text-grayscale-500">{description}</span> : null}
        </div>
      </label>
      {checked ? <QuantityStepper {...stepperProps} /> : null}
    </div>
  )
}
