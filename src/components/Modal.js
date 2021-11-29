import React from "react";
import { Box } from "@theme-ui/components";

function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <>
      <Box sx={styles.overlay} />
      <Box sx={styles.modalWrapper}>
        <Box sx={styles.modal}>{children}</Box>
      </Box>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    bg: "heading_secondary",
    opacity: 0.4,
    zIndex: 110,
  },
  modalWrapper: {
    zIndex: 120,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    bg: "white",
    borderRadius: "7px",
    p: "1rem",
    width: ["90%", "auto"],
  },
};

Modal.defaultProps = {
  isActive: true,
};

export default Modal;
