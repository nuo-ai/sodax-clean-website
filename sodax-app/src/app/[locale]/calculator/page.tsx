'use client'

import { useMemo, useState } from 'react'
import { Dropdown, type DropdownOption } from '@/components/ui/Dropdown'
import { CalculatorStep } from '@/components/features/CalculatorStep'
import { CheckboxQuant } from '@/components/features/CheckboxQuant'
import { CheckboxSimple } from '@/components/features/CheckboxSimple'
import { PriceSummary } from '@/components/features/PriceSummary'
import { useTranslations } from 'next-intl'

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

type BaseConfig = {
  value: BaseOption['value']
  translationKey: string
  price: number
}

type AddOnConfig = {
  key: AddOnKey
  price: number
}

type SpecialConfig = {
  key: SpecialKey
}

const BASE_OPTION_CONFIG: BaseConfig[] = [
  { value: 'studio', translationKey: 'studio', price: 180 },
  { value: '1b1b', translationKey: '1b1b', price: 230 },
  { value: '2b1b', translationKey: '2b1b', price: 260 },
  { value: '2b2b', translationKey: '2b2b', price: 320 },
  { value: '3b1b', translationKey: '3b1b', price: 360 },
  { value: '3b2b', translationKey: '3b2b', price: 390 },
  { value: '4b2b', translationKey: '4b2b', price: 420 },
]

const ADD_ON_CONFIG: AddOnConfig[] = [
  { key: 'carpet', price: 70 },
  { key: 'windows', price: 15 },
  { key: 'oven', price: 50 },
  { key: 'microwave', price: 25 },
  { key: 'dishwasher', price: 25 },
  { key: 'fridge', price: 50 },
  { key: 'balcony', price: 50 },
  { key: 'extra-room', price: 30 },
]

const SPECIAL_CONFIG: SpecialConfig[] = [
  { key: 'wall-stain' },
  { key: 'floor-stain' },
  { key: 'trash' },
]

type AddOnState = Record<AddOnKey, { selected: boolean; quantity: number }>
type SpecialState = Record<SpecialKey, boolean>

/**
 * 導航至 /calculator 的價格計算器頁面，負責組裝 UI 並依據 productContext 定義的報價邏輯
 * 即時計算退租清潔的預估總價。
 */
export default function CalculatorPage(): JSX.Element {
  const [selectedBase, setSelectedBase] = useState<string>(BASE_OPTION_CONFIG[0].value)
  const [addOns, setAddOns] = useState<AddOnState>(() =>
    ADD_ON_CONFIG.reduce<AddOnState>((acc, option) => {
      acc[option.key] = { selected: false, quantity: 1 }
      return acc
    }, {} as AddOnState),
  )
  const [specials, setSpecials] = useState<SpecialState>(() =>
    SPECIAL_CONFIG.reduce<SpecialState>((acc, option) => {
      acc[option.key] = false
      return acc
    }, {} as SpecialState),
  )

  const totalPrice = useMemo(() => {
    const basePrice = BASE_OPTION_CONFIG.find((option) => option.value === selectedBase)?.price ?? 0
    const addOnTotal = ADD_ON_CONFIG.reduce((sum, option) => {
      const state = addOns[option.key]
      if (!state?.selected) return sum
      return sum + option.price * state.quantity
    }, 0)
    return basePrice + addOnTotal
  }, [addOns, selectedBase])

  const t = useTranslations('Calculator')
  const baseOptions: BaseOption[] = BASE_OPTION_CONFIG.map((option) => ({
    value: option.value,
    label: t(`step1.options.${option.translationKey}.label`),
    meta: t(`step1.options.${option.translationKey}.meta`),
    price: option.price,
  }))
  const addOnOptions = ADD_ON_CONFIG.map((option) => ({
    key: option.key,
    title: t(`step2.options.${option.key}.title`),
    description: t(`step2.options.${option.key}.description`),
    price: option.price,
  }))
  const specialOptions = SPECIAL_CONFIG.map((option) => ({
    key: option.key,
    title: t(`step3.options.${option.key}.title`),
    description: t(`step3.options.${option.key}.description`),
  }))

  const selectedBaseOption = baseOptions.find((option) => option.value === selectedBase)

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row lg:gap-12">
      <div className="flex-1 space-y-10">
        <header className="space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-500">Sodax Clean</p>
          <h1 className="font-display text-3xl text-grayscale-900 md:text-4xl">{t('title')}</h1>
          <p className="text-body-md text-grayscale-600">
            {t('description')}
          </p>
        </header>

        <section className="space-y-8">
          <CalculatorStep index={1} title={t('step1.title')}>
            <Dropdown
              placeholder={t('step1.placeholder')}
              options={baseOptions}
              selectedValue={selectedBase}
              onSelect={(option) => setSelectedBase(option.value)}
            />
          </CalculatorStep>

          <CalculatorStep index={2} title={t('step2.title')}>
            <div className="grid gap-4 md:grid-cols-2">
              {addOnOptions.map((option) => (
                <CheckboxQuant
                  key={option.key}
                  title={option.title}
                  description={option.description}
                  checked={addOns[option.key].selected}
                  quantity={addOns[option.key].quantity}
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

          <CalculatorStep index={3} title={t('step3.title')}>
            <div className="grid gap-4 md:grid-cols-2">
              {specialOptions.map((option) => (
                <CheckboxSimple
                  key={option.key}
                  title={option.title}
                  description={option.description}
                  checked={specials[option.key]}
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
          label={t('summary.label')}
          total={`$${totalPrice}`}
          actionHref="/contact"
          actionLabel={t('summary.bookNow')}
        />
        <div className="mt-6 space-y-2 rounded-lg border border-grayscale-200 p-4 text-body-sm text-grayscale-600">
          <p>{t('summary.selected', { property: selectedBaseOption?.label ?? t('summary.unselected') })}</p>
          <ul className="list-disc pl-5">
            <li>{t('summary.note1')}</li>
            <li>{t('summary.note2')}</li>
          </ul>
        </div>
      </aside>
    </main>
  )
}
