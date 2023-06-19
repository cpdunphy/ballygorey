'use client'

import { CacheProvider } from '@emotion/react'
import {
  useEmotionCache,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  AppShell,
  Header,
  Footer,
  Text,
} from '@mantine/core'
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

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <AppShell
            padding="md"
            header={
              <Header height={60} p="xs">
                {/* Header content */}
                <Brand />
              </Header>
            }
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
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
