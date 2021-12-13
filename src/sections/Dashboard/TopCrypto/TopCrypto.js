import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Heading } from "@theme-ui/components";

import useFetch from "../../../useFetch";
import CryptoCard from "./CryptoCard";
import LoadingCard from "../../../components/LoadingCard";

function TopCrypto() {
  const { isLoading, isError, data, fetchAPI } = useFetch();
  const [crptoData, setCrptoData] = useState([]);

  async function getCrypto() {
    await fetchAPI({ url: "crypto" });
  }

  useEffect(async () => {
    getCrypto();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setCrptoData(data.crypto);
    }
  }, [isLoading, isError, data]);

  return (
    <Box as="section" id="top-crypto" sx={styles.section}>
      <Container variant="container.big">
        <Heading as="h1" sx={styles.title}>
          Top Crypto
        </Heading>

        <Grid columns={[1, 2, "repeat(5, 1fr)"]} gap="0.5rem">
          {isLoading
            ? Array(5)
                .fill(1)
                .map((_, idx) => <LoadingCard key={idx} />)
            : crptoData?.map((data) => (
                <CryptoCard data={data} key={data.currency} />
              ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    mt: ["3rem", "4rem"],
    mb: ["2rem", "2rem"],
  },
  title: {
    mb: ["2rem"],
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default TopCrypto;
