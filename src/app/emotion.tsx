'use client'

import { CacheProvider } from '@emotion/react'
import {
  useEmotionCache,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  AppShell,
  Footer,
  Text,
} from '@mantine/core'
import { HeaderResponsive } from './_header'
import { Brand } from './_brand'
import { FooterSocial } from './_footer'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/blog', label: 'Blog' },
    { link: '/contact', label: 'Contact' },
  ]

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            primaryColor: 'teal',
            fontFamily: '-apple-system',
          }}
        >
          <AppShell
            padding="md"
            header={<HeaderResponsive links={links} />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[9]
                    : theme.colors.gray[0],
              },
            })}
            footer={
              <Footer height={60} p="md">
                <FooterSocial />
              </Footer>
            }
          >
            {children}
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  )
}
