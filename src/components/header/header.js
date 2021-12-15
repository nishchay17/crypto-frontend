/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { jsx, Container, Flex, Heading, Box } from "theme-ui";
import { Link as ScrollLink } from "react-scroll";

import MobileDrawer from "./mobileDrawer";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";

export default function Header({ className, navLinkData }) {
  return (
    <DrawerProvider>
      <Box as="header" sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Link href="/">
            <Heading sx={{ cursor: "pointer" }}>Crytpo Market</Heading>
          </Link>

          <Flex as="nav" sx={styles.nav}>
            {navLinkData.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>
          {navLinkData.length > 0 && <MobileDrawer navLinkData={navLinkData} />}
        </Container>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  header: {
    color: "text_white",
    fontWeight: "normal",
    py: [4, null, null, "25px"],
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",

    "&.sticky": {
      backgroundColor: "background",
      color: "text",
      py: "15px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    ml: "auto",
    display: ["none", null, null, null, "block"],
    navLink: {
      fontSize: "16px",
      color: "#0F2137",
      fontWeight: "400",
      cursor: "pointer",
      lineHeight: "1.2",
      mr: "48px",
      transition: "500ms",
      ":last-child": {
        mr: "0",
      },
      "&:hover, &.active": {
        textShadow: "0 0 1px #0F2137",
      },
    },
  },
};
