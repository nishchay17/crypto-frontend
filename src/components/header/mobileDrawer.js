import React, { useContext } from "react";
import { Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

import Drawer from "../drawer";
import { DrawerContext } from "../../contexts/drawer/drawer.context";

const MobileDrawer = ({ navLinkData }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {navLinkData.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
    cursor: "pointer",
    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    cursor: "pointer",
    top: "36px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",

    a: {
      fontSize: "16px",
      fontWeight: "400",
      color: "black",
      py: 2,
      cursor: "pointer",
      transition: "all 0.3s",
      "&:hover, &:focus": {
        color: "primary",
      },
    },
  },
};

export default MobileDrawer;
