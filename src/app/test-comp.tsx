'use client'

import { createStyles, Select, TextInput } from '@mantine/core'
import { Button, rem, Tooltip } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import { IconCopy, IconCheck } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    zIndex: 1,
  },
}))

export function Test() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles()
  const clipboard = useClipboard()
  return (
    <div>
      <TextInput
        label="Shipping address"
        placeholder="15329 Huston 21st"
        classNames={classes}
      />

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />

      <Tooltip
        label="Link copied!"
        offset={5}
        position="bottom"
        radius="xl"
        transitionProps={{ duration: 100, transition: 'slide-down' }}
        opened={clipboard.copied}
      >
        <Button
          variant="light"
          rightIcon={
            clipboard.copied ? (
              <IconCheck size="1.2rem" stroke={1.5} />
            ) : (
              <IconCopy size="1.2rem" stroke={1.5} />
            )
          }
          radius="xl"
          size="md"
          styles={{
            root: { paddingRight: rem(14), height: rem(48) },
            rightIcon: { marginLeft: rem(22) },
          }}
          onClick={() =>
            clipboard.copy('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
          }
        >
          Copy link to clipboard
        </Button>
      </Tooltip>
    </div>
  )
}
