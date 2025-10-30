'use client'

/**
 * CheckboxSimpleProps 定義無數量調整的勾選項目。
 */
export interface CheckboxSimpleProps {
  /**
   * 勾選框標題，如「搬家後深度清潔」。
   */
  title: string
  /**
   * 副文字描述，例如價格或備註。
   */
  description?: string
  /**
   * 是否勾選。
   */
  checked: boolean
  /**
   * 勾選狀態改變時的回呼。
   */
  onCheckedChange?: (checked: boolean) => void
}

/**
 * CheckboxSimple 為價格計算器中「特殊項目」使用的勾選卡片。
 * - 依照規格使用 Tailwind Token，僅處理視覺與基本互動。
 */
export function CheckboxSimple({
  title,
  description,
  checked,
  onCheckedChange,
}: CheckboxSimpleProps) {
  const handleToggle = () => {
    onCheckedChange?.(!checked)
  }

  return (
    <label className="flex w-full items-center gap-3 rounded-lg border border-grayscale-200 p-4">
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
  )
}
