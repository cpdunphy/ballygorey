import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconBrandFacebook,
} from '@tabler/icons-react'
import { Logo } from './_logo'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

export function FooterSocial() {
  const { classes } = useStyles()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <div>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Logo colorScheme={colorScheme} />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            size="lg"
            component="a"
            href="https://www.linkedin.com/in/collindunphy/"
          >
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://instagram.com/collindunphy/"
          >
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://twitter.com/collindunphy/"
          >
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://facebook.com/collindunphy.7/"
          >
            <IconBrandFacebook size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="mailto:collin@ballygorey.com/"
          >
            <IconMail size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
