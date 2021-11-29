import React from "react";
import { Container, Box, Heading, Text } from "theme-ui";

function Footer() {
  return (
    <Box as="footer" id="footer" sx={styles.section}>
      <Container sx={styles.container}>
        <Text as="p" ml="auto">
          Created by @nishchay17
        </Text>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    mb: ["1rem", "2rem"],
    mt: ["1rem", "2rem"],
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: ["column", null, null, "row"],
  },
};

export default Footer;
