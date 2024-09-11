import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Cad',
    default: 'CAD - Boutique agency exectuing high-quality digital solutions',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
