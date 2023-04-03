// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider, Navbar, Text, Button, Link, Input, Spacer, Dropdown, Avatar, Container, Row } from "@nextui-org/react";
import SSRProvider from "react-bootstrap/SSRProvider";

const fonts = {
  sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
};

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    fonts,
  },
});

// import { Content } from "./Content.js"
import { styled } from "@nextui-org/react";

export const Box = styled("div", {
  boxSizing: "border-box",
});

const collapseItems = ["Book a Meeting", "Contact Me"];

function NavigationBar() {
  return (
    <Navbar
      isBordered
      variant="sticky">
      {/* Menu Toggle */}
      <Navbar.Toggle
        aria-label="toggle navigation"
        showIn="xs"
      />
      {/* Ballygorey Branding */}
      <Navbar.Brand>
        <Text
          b
          color="inherit">
          BALLYGOREY
        </Text>
      </Navbar.Brand>
      {/* Navigation Items */}
      <Navbar.Content
        hideIn="xs"
        variant="underline">
        <Navbar.Link
          isActive
          href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/calendar">Book a Meeting</Navbar.Link>
        <Navbar.Link href="mailto:collind@vt.edu">Contact Me</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://www.sec.vt.edu/content/dam/sec_vt_edu/headshots/2022-23/CollinDunphy-Profile.jpg"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => console.log({ actionKey })}>
            <Dropdown.Item
              key="profile"
              css={{ height: "$18" }}>
              <Text
                b
                color="inherit"
                css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text
                b
                color="inherit"
                css={{ d: "flex" }}>
                collind@vt.edu
              </Text>
            </Dropdown.Item>
            <Dropdown.Item
              key="settings"
              withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item
              key="analytics"
              withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item
              key="help_and_feedback"
              withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item
              key="logout"
              withDivider
              color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      {/* Items that show when collapsed */}
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#">
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={theme}>
        {/* <Layout>
        <NavigationBar />
      </Layout> */}
        <Box
          css={{
            maxW: "100%",
          }}>
          <NavigationBar />
          <Component {...pageProps} />
          <Container>
            <Row
              align="center"
              justify="center">
              <Text>&#169; Copyright Ballygorey Labs LLC</Text>
            </Row>
          </Container>
        </Box>
      </NextUIProvider>
    </SSRProvider>
  );
}

export default App;
