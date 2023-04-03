// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const { theme } = useTheme();

  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      {/* <Layout> */}
      <Navbar
        isBordered
        variant="sticky">
        <Navbar.Brand>
          <Text
            b
            color="inherit"
            hideIn="xs">
            BALLYGOREY
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor="primary"
          hideIn="xs"
          variant="sticky">
          {" "}
          <Navbar.Link href="/">Projects</Navbar.Link>
          <Navbar.Link href="#">Experience</Navbar.Link>
          <Navbar.Link href="/calendar">Book a Meeting</Navbar.Link>
          <Navbar.Link href="#">Contact Me</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link
            color="inherit"
            href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button
              auto
              flat
              as={Link}
              href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* </Layout> */}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
