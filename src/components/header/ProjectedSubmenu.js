import React from "react";
import { Box, Button, Text } from "theme-ui";
import {
  useUserDispatch,
  useUserState,
} from "../../contexts/user/user.provider";

function ProjectedSubmenu() {
  const dispatch = useUserDispatch();
  const name = useUserState("name");
  return (
    <Box sx={styles.subMemu}>
      <Text as="p" color="white">
        Hello {name}!
      </Text>
      <Button
        sx={styles.logoutBtn}
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        Logout
      </Button>
    </Box>
  );
}

const styles = {
  subMemu: {
    position: "absolute",
    bg: "heading_secondary",
    top: "100%",
    right: 0,
    borderRadius: "7px",
    p: "1rem",
    pt: "0.7rem",
    width: "18rem",
  },
  logoutBtn: {
    bg: "border_color",
    color: "heading_secondary",
    fontSize: "1rem",
    width: "100%",
    cursor: "pointer",
    mt: "1rem",
  },
};

export default ProjectedSubmenu;
