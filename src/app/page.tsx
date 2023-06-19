'use client'

import { Test } from './test-comp'
import { AppShell, Header, Footer, Text } from '@mantine/core'
import { Brand } from './_brand'
import { FooterSocial } from './_footer'

export default function Page() {
  return (
    <>
      <Text>Hello World my name is Collin Dunphy</Text>
      <Test />
    </>
  )
}
