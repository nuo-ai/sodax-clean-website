'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * 下拉選單的選項資料結構。
 */
export interface DropdownOption {
  /**
   * 選項所代表的值。
   */
  value: string
  /**
   * 顯示於左側的主要文字，例如房型名稱。
   */
  label: string
  /**
   * 額外顯示於右側的資訊，例如價格，格式請直接傳入字串（如「$200」）。
   */
  meta?: string
}

/**
 * DropdownProps 定義了下拉選單組件所需的所有屬性。
 */
export interface DropdownProps {
  /**
   * 顯示在按鈕上的文字，當沒有選取任何選項時可當作 placeholder。
   */
  placeholder: string
  /**
   * 供使用者選擇的選項清單。
   */
  options: DropdownOption[]
  /**
   * 已選取選項的 value，若未傳入則顯示 placeholder。
   */
  selectedValue?: string
  /**
   * 點擊選項時的回呼函式，可取得被選取的選項資料。
   */
  onSelect?: (option: DropdownOption) => void
}

/**
 * Dropdown 為價格計算器中使用的下拉選單 UI。
 * - 採用 Tailwind 設計 Token 的樣式類別。
 * - 僅處理視覺與互動，不負責商業邏輯。
 */
export function Dropdown({ placeholder, options, selectedValue, onSelect }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const selectedOption = options.find((option) => option.value === selectedValue)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelect = (option: DropdownOption) => {
    onSelect?.(option)
    setOpen(false)
  }

  return (
    <div className="relative w-full">
      <button
        ref={triggerRef}
        type="button"
        className="w-full rounded-lg border border-grayscale-200 bg-grayscale-50 p-4 text-left text-body-md text-grayscale-900 flex items-center justify-between"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={`h-5 w-5 text-grayscale-500 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute left-0 right-0 z-10 mt-2 w-full rounded-lg border border-grayscale-200 bg-white shadow-card-lg"
        >
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className="flex w-full items-center justify-between p-4 text-left hover:bg-grayscale-50"
              >
                <span className="text-body-md text-grayscale-800">{option.label}</span>
                {option.meta ? (
                  <span className="text-body-md font-bold text-grayscale-900">{option.meta}</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
