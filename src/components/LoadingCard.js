import React from "react";
import { keyframes } from "@emotion/react";
import { Box } from "@theme-ui/components";

const wave = keyframes`
0% {
  background: rgb(92, 92, 92);
}
80% {
  background: rgb(66, 66, 66);
}
100% {
  background: rgb(15, 15, 15);
}
`;

const LoadingCard = () => {
  return <Box sx={styles.loadingCard} />;
};

const styles = {
  loadingCard: {
    borderRadius: "7px",
    width: "100%",
    height: "10rem",
    bg: "#F4F0EF",
    animation: `${wave} 1.5s linear infinite`,
  },
};

export default LoadingCard;
