import React from "react";
import { Box, Container, Heading } from "@theme-ui/components";

function SignupSection() {
  return (
    <Box as="section" id="signup" sx={styles.section}>
      <Container sx={styles.container}>
        <Heading as="h1">Signup</Heading>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    mt: ["5rem", "7rem"],
  },
  container: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: ["column", null, null, "row"],
  },
};

export default SignupSection;
