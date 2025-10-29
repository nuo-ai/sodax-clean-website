import type { Config } from 'tailwindcss'
import { colors, typography } from './src/lib/design-tokens'

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
        success: colors.success,
        error: colors.error,
        warning: colors.warning,

        // Figma 品牌色（扁平鍵名，便於直接使用如 bg-primary-dark-blue）
        'primary-dark-blue': colors.primaryDarkBlue,
        'primary-blue-light': colors.primaryBlueLight,
        'primary-blue-lightest': colors.primaryBlueLightest,
        'accent-yellow': colors.accentYellow,
        'base-black': colors.baseBlack,
        'base-gray': colors.baseGray,
        'white-stroke': colors.whiteStroke,
      },
      fontFamily: {
        sans: typography.fontFamily.sans,
        serif: typography.fontFamily.serif,
      },
      fontSize: typography.fontSize,
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
