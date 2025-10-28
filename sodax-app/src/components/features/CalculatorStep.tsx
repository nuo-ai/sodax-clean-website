/**
 * CalculatorStepProps 定義步驟區塊所需的屬性。
 */
export interface CalculatorStepProps {
  /**
   * 步驟編號，顯示於圓形徽章內，例如 1、2、3。
   */
  index: number
  /**
   * 步驟標題文字，例如「步驟 1：選擇房型」。
   */
  title: string
  /**
   * 步驟內容，通常為對應的 UI 或說明文字。
   */
  children: React.ReactNode
}

/**
 * CalculatorStep 是價格計算器的步驟容器。
 * - 依照設計規格應用 Tailwind Token。
 * - 顯示步驟編號與標題，並包裹內容。
 */
export function CalculatorStep({ index, title, children }: CalculatorStepProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 font-display font-bold text-white">
          {index}
        </div>
        <h3 className="font-display text-heading-md text-grayscale-900">{title}</h3>
      </div>
      <div>{children}</div>
    </section>
  )
}
