import React from "react";
import { Box } from "@theme-ui/components";

function FormGroup({ children }) {
  return <Box sx={styles}>{children}</Box>;
}

const styles = {
  width: ["100%", "25rem"],
  mt: "0.7rem",
};

export default FormGroup;
