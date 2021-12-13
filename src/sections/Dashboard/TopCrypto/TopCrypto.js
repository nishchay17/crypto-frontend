import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Button,
  Flex,
} from "@theme-ui/components";

import useFetch from "../../../useFetch";
import CryptoCard from "./CryptoCard";
import LoadingCard from "../../../components/LoadingCard";

function TopCrypto() {
  const { isLoading, isError, data, fetchAPI } = useFetch();
  const [crptoData, setCrptoData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  async function getCrypto() {
    await fetchAPI({ url: "crypto", query: { page: pageNum } });
  }

  useEffect(async () => {
    getCrypto();
  }, [pageNum]);

  useEffect(() => {
    if (!isLoading) {
      setCrptoData(data.crypto);
    }
  }, [isLoading, isError, data]);

  return (
    <Box as="section" id="top-crypto" sx={styles.section}>
      <Container variant="container.big">
        <Flex sx={styles.flex}>
          <Heading as="h1">Top Crypto</Heading>
          <Flex>
            <Button
              onClick={() =>
                setPageNum((p) => {
                  return Math.max(1, p - 1);
                })
              }
              sx={{
                borderRadius: 0,
                fontSize: "0.8rem",
                px: "0.5rem",
                py: "0.3rem",
              }}
            >
              Previous
            </Button>
            <Button
              onClick={() =>
                setPageNum((p) => {
                  return Math.min(20, p + 1);
                })
              }
              sx={{
                borderRadius: 0,
                fontSize: "0.8rem",
                px: "0.5rem",
                py: "0.3rem",
              }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
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
  flex: {
    mb: ["2rem"],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default TopCrypto;
