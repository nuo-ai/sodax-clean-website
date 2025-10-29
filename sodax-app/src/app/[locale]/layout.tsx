import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {NextIntlClientProvider} from 'next-intl'
import {getLocale, getMessages} from 'next-intl/server'

export const metadata: Metadata = {
  title: 'Sodax Clean - Professional Cleaning Services',
  description: 'Professional home and office cleaning services in Sydney. Get a free quote today.',
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
