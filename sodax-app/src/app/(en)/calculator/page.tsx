'use client'

import { useMemo, useState } from 'react'
import { Dropdown, type DropdownOption } from '../../../components/ui/Dropdown'
import { CalculatorStep } from '../../../components/features/CalculatorStep'
import { CheckboxQuant } from '../../../components/features/CheckboxQuant'
import { CheckboxSimple } from '../../../components/features/CheckboxSimple'
import { PriceSummary } from '../../../components/features/PriceSummary'

type BaseOption = DropdownOption & { price: number }

type AddOnKey =
  | 'carpet'
  | 'windows'
  | 'oven'
  | 'microwave'
  | 'dishwasher'
  | 'fridge'
  | 'balcony'
  | 'extra-room'

type SpecialKey = 'wall-stain' | 'floor-stain' | 'trash'

interface AddOnOption {
  key: AddOnKey
  title: string
  description: string
  price: number
}

interface SpecialOption {
  key: SpecialKey
  title: string
  description: string
}

const BASE_OPTIONS: BaseOption[] = [
  { value: 'studio', label: 'Studio', meta: '$180', price: 180 },
  { value: '1b1b', label: '1B1B（1臥1衛）', meta: '$230', price: 230 },
  { value: '2b1b', label: '2B1B（2臥1衛）', meta: '$260', price: 260 },
  { value: '2b2b', label: '2B2B（2臥2衛）', meta: '$320', price: 320 },
  { value: '3b1b', label: '3B1B（3臥1衛）', meta: '$360', price: 360 },
  { value: '3b2b', label: '3B2B（3臥2衛）', meta: '$390', price: 390 },
  { value: '4b2b', label: '4B2B（4臥2衛）', meta: '$420', price: 420 },
]

const ADD_ON_OPTIONS: AddOnOption[] = [
  { key: 'carpet', title: '蒸汽深度清潔', description: '$70 / 處', price: 70 },
  { key: 'windows', title: '門窗深度清潔', description: '$15 / 扇', price: 15 },
  { key: 'oven', title: '烤箱深度清潔', description: '$50 / 個', price: 50 },
  { key: 'microwave', title: '微波爐深度清潔', description: '$25 / 個', price: 25 },
  { key: 'dishwasher', title: '洗碗機深度清潔', description: '$25 / 個', price: 25 },
  { key: 'fridge', title: '冰箱深度清潔', description: '$50 / 個', price: 50 },
  { key: 'balcony', title: '陽台額外清潔', description: '$50 / 個', price: 50 },
  { key: 'extra-room', title: '額外衛浴 / 客廳', description: '$30 / 間', price: 30 },
]

const SPECIAL_OPTIONS: SpecialOption[] = [
  { key: 'wall-stain', title: '牆面特殊污漬', description: '需人工報價（參考 $30 / 處）' },
  { key: 'floor-stain', title: '地面特殊污漬', description: '需人工報價（參考 $30 / 處）' },
  { key: 'trash', title: '生活垃圾清潔', description: '需人工報價（參考 $10 / 袋）' },
]

type AddOnState = Record<AddOnKey, { selected: boolean; quantity: number }>
type SpecialState = Record<SpecialKey, boolean>

/**
 * 導航至 /calculator 的價格計算器頁面，負責組裝 UI 並依據 productContext 定義的報價邏輯
 * 即時計算退租清潔的預估總價。
 */
export default function CalculatorPage(): JSX.Element {
  const [selectedBase, setSelectedBase] = useState<string>(BASE_OPTIONS[0].value)
  const [addOns, setAddOns] = useState<AddOnState>(() =>
    ADD_ON_OPTIONS.reduce<AddOnState>((acc, option) => {
      acc[option.key] = { selected: false, quantity: 1 }
      return acc
    }, {} as AddOnState),
  )
  const [specials, setSpecials] = useState<SpecialState>(() =>
    SPECIAL_OPTIONS.reduce<SpecialState>((acc, option) => {
      acc[option.key] = false
      return acc
    }, {} as SpecialState),
  )

  const totalPrice = useMemo(() => {
    const basePrice = BASE_OPTIONS.find((option) => option.value === selectedBase)?.price ?? 0
    const addOnTotal = ADD_ON_OPTIONS.reduce((sum, option) => {
      const state = addOns[option.key]
      if (!state?.selected) return sum
      return sum + option.price * state.quantity
    }, 0)
    return basePrice + addOnTotal
  }, [addOns, selectedBase])

  const selectedBaseOption = BASE_OPTIONS.find((option) => option.value === selectedBase)

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row lg:gap-12">
      <div className="flex-1 space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Sodax Clean</p>
          <h1 className="font-display text-3xl text-grayscale-900 md:text-4xl">退租清潔費用試算</h1>
          <p className="text-body-md text-grayscale-600">
            根據房型與需要的額外服務，自動計算預估費用。特殊需求會在提交後由專人聯繫提供正式報價。
          </p>
        </header>

        <section className="space-y-8">
          <CalculatorStep index={1} title="步驟 1：選擇房型">
            <Dropdown
              placeholder="請選擇房型"
              options={BASE_OPTIONS}
              selectedValue={selectedBase}
              onSelect={(option) => setSelectedBase(option.value)}
            />
          </CalculatorStep>

          <CalculatorStep index={2} title="步驟 2：額外項目（可複選）">
            <div className="grid gap-4 md:grid-cols-2">
              {ADD_ON_OPTIONS.map((option) => (
                <CheckboxQuant
                  key={option.key}
                  title={option.title}
                  description={option.description}
                  defaultChecked={addOns[option.key].selected}
                  defaultQuantity={addOns[option.key].quantity}
                  onCheckedChange={(checked) =>
                    setAddOns((prev) => ({
                      ...prev,
                      [option.key]: {
                        selected: checked,
                        quantity: checked ? prev[option.key].quantity : 1,
                      },
                    }))
                  }
                  onQuantityChange={(quantity) =>
                    setAddOns((prev) => ({
                      ...prev,
                      [option.key]: {
                        selected: prev[option.key].selected,
                        quantity: Math.max(1, quantity),
                      },
                    }))
                  }
                />
              ))}
            </div>
          </CalculatorStep>

          <CalculatorStep index={3} title="步驟 3：特殊項目（需人工報價）">
            <div className="grid gap-4 md:grid-cols-2">
              {SPECIAL_OPTIONS.map((option) => (
                <CheckboxSimple
                  key={option.key}
                  title={option.title}
                  description={option.description}
                  defaultChecked={specials[option.key]}
                  onCheckedChange={(checked) =>
                    setSpecials((prev) => ({
                      ...prev,
                      [option.key]: checked,
                    }))
                  }
                />
              ))}
            </div>
          </CalculatorStep>
        </section>
      </div>

      <aside className="md:w-80 lg:w-96">
        <PriceSummary
          label="預估總價"
          total={`$${totalPrice}`}
          actionHref="/contact"
          actionLabel="預約清潔"
        />
        <div className="mt-6 space-y-2 rounded-lg border border-grayscale-200 p-4 text-body-sm text-grayscale-600">
          <p>
            目前選擇：{selectedBaseOption?.label ?? '未選擇房型'}。特殊項目將在提交後由專人聯繫確認最終費用。
          </p>
          <ul className="list-disc pl-5">
            <li>此金額僅供參考，實際費用以現場勘查為準。</li>
            <li>若有其他需求，請於備註中說明，我們將提供客製報價。</li>
          </ul>
        </div>
      </aside>
    </main>
  )
}
