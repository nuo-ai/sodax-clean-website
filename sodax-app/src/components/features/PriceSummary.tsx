'use client'

import Link from 'next/link'
import { Button } from '../ui/Button'

/**
 * PriceSummaryProps 定義價格摘要卡片的屬性。
 */
export interface PriceSummaryProps {
  /**
   * 價格標題，預設為「預估總價」。
   */
  label?: string
  /**
   * 顯示的總金額，例如 "$480"。
   */
  total: string
  /**
   * 行動按鈕的連結，若未傳入則使用 button 元素。
   */
  actionHref?: string
  /**
   * 行動按鈕點擊事件，當未提供 actionHref 時生效。
   */
  onAction?: () => void
  /**
   * 行動按鈕顯示文字，預設「立即預訂」。
   */
  actionLabel?: string
}

/**
 * PriceSummary 為計算器中的價格總結固定卡片。
 * - 支援在行動端底部、桌面端側邊位置。
 * - 使用 Tailwind Token 以符合設計規格。
 */
export function PriceSummary({
  label = '預估總價',
  total,
  actionHref,
  onAction,
  actionLabel = '立即預訂',
}: PriceSummaryProps) {
  const content = (
    <div className="sticky bottom-0 w-full rounded-t-lg bg-white p-6 shadow-overlay md:top-10 md:rounded-lg">
      <div className="flex flex-col gap-2">
        <span className="text-body-md text-grayscale-500">{label}</span>
        <div className="text-heading-lg font-bold text-primary-500">{total}</div>
      </div>
      <div className="mt-4">
        <Button className="w-full" onClick={actionHref ? undefined : onAction}>
          {actionLabel}
        </Button>
      </div>
    </div>
  )

  if (actionHref) {
    return <Link href={actionHref}>{content}</Link>
  }

  return content
}
