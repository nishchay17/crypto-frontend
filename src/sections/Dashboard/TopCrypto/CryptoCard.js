import React from "react";
import { Box, Heading, Text } from "@theme-ui/components";
import { keyframes } from "@emotion/react";

import Image from "../../../components/image";

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

function CryptoCard({ data }) {
  function getColor(num) {
    if (num > 0) return "green";
    return "red";
  }

  return (
    <Box sx={styles.cryptoCard}>
      <Box mb="1rem" sx={styles.flex}>
        <Heading as="h4">{data.name} </Heading>
        <Box sx={styles.imageWrapper}>
          <Image src={data.logo_url} />
        </Box>
      </Box>
      <Text sx={styles.cryptoCard.cryptoPrice}>
        ₹ {parseFloat(data.price).toFixed(2)}
      </Text>
      <Box mt="0.4rem">
        <Text>Percentage changes</Text>
        <Box mt="0.1rem" sx={styles.flex}>
          <Box>Hourly</Box>
          <Box color={getColor(data.one_hour.price_change_pct)}>
            {data.one_hour.price_change_pct}%
          </Box>
        </Box>
        <Box mt="0.1rem" sx={styles.flex}>
          <Box>Daily</Box>
          <Box color={getColor(data.one_day.price_change_pct)}>
            {data.one_day.price_change_pct}%
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export const LoadingCryptoCard = () => {
  return <Box sx={styles.loadingCard} />;
};

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cryptoCard: {
    bg: "black",
    color: "white",
    p: "1rem",
    borderRadius: "7px",
    h4: {
      color: "white",
      fontSize: ["1rem", null, "1.2rem"],
    },
    cryptoPrice: {
      borderRadius: "7px",
      bg: "background_secondary",
      px: "0.4rem",
      color: "black",
    },
  },
  imageWrapper: {
    height: "2.5rem",
    width: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    bg: "white",
    p: "0.3rem",
    img: {
      height: "100%",
      width: "100%",
    },
  },
  loadingCard: {
    borderRadius: "7px",
    width: "100%",
    height: "10rem",
    bg: "#F4F0EF",
    animation: `${wave} 1.5s linear infinite`,
  },
};

export default CryptoCard;
