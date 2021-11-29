import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container, Heading, Box, Flex } from "theme-ui";

import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import ProjectedSubmenu from "./ProjectedSubmenu";

function ProtectedNav({ className }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  function menuHelper(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsSubMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", menuHelper);
    return () => {
      document.removeEventListener("click", menuHelper);
    };
  }, []);

  return (
    <DrawerProvider>
      <Box as="header" sx={styles.header} className={className}>
        <Container variant="container.big" sx={styles.container}>
          <Link href="/dashboard">
            <Heading sx={{ cursor: "pointer" }}>Crytpo Alert</Heading>
          </Link>
          <Flex as="nav" sx={styles.nav}>
            <Box sx={styles.subMenuWrapper} ref={wrapperRef}>
              <Box
                sx={styles.avatar}
                onClick={() => setIsSubMenuOpen((p) => !p)}
              >
                N
              </Box>
              {isSubMenuOpen && <ProjectedSubmenu />}
            </Box>
          </Flex>
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
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.15)",
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
  },
  avatar: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    width: "2.5rem",
    height: "2.5rem",
    fontSize: "1.2rem",
    color: "white",
    borderRadius: "50%",
    bg: "heading_secondary",
  },
  subMenuWrapper: {
    position: "relative",
    userSelect: "none",
  },
};

export default ProtectedNav;
