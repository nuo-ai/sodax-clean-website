import type { Config } from 'tailwindcss'
import { colors, typography } from './src/lib/design-tokens'

const sansFontFamily = [...typography.fontFamily.sans]
const serifFontFamily = [...typography.fontFamily.serif]
const fontSize = Object.fromEntries(
  Object.entries(typography.fontSize).map(([key, value]) => [key, [value[0], { ...value[1] }]])
) satisfies Record<string, [string, { lineHeight: string }]>

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        neutral: colors.neutral,
        base: colors.base,
        accent: colors.accent,
        success: colors.success,
        error: colors.error,
        warning: colors.warning,
      },
      fontFamily: {
        sans: sansFontFamily,
        serif: serifFontFamily,
      },
      fontSize,
      fontWeight: typography.fontWeight,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
