'use client'

import React, { ReactNode, useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from './stote/index'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'

interface RootLayoutProps {
  children: ReactNode
  session?: string
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <SessionProvider >
            <ThemeSync>
              <Toaster position="top-right" reverseOrder={false} />
              {children}
            </ThemeSync>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  )
}

function ThemeSync({ children }: { children: ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark', mode === 'dark')
    }
  }, [mode])

  return <>{children}</>
}
