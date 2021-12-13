import React, { useState, useEffect } from "react";
import { Box, Container, Heading, Text, Flex } from "@theme-ui/components";

import useFetchAPI from "../../../useFetch";

function SaCard({ type, total, score }) {
  function getBoarderColor(type) {
    return type === "Negative"
      ? "red"
      : type === "Neutral"
      ? "yellow"
      : "green";
  }

  return (
    <Flex
      sx={{
        alignItems: "baseline",
        mr: "1rem",
        border: "3px solid",
        borderRadius: "3px",
        px: "0.5rem",
        py: "0rem",
        borderColor: getBoarderColor(type),
      }}
    >
      <Text sx={{ fontSize: "3rem" }}>{score}</Text> / <Text>{total}</Text>{" "}
      <Text sx={{ fontSize: "1.5rem", ml: "0.5rem" }}>{type}</Text>
    </Flex>
  );
}

function SentimentAnalysisLayout() {
  const { isLoading, isError, data, fetchAPI } = useFetchAPI();
  const [saData, setSaData] = useState({});
  const [total, setTotal] = useState(1);

  function convertSA(sa) {
    sa = JSON.parse(sa);
    setTotal(sa.length);

    const res = { negative: 0, neutral: 0, positive: 0 };
    sa.map((t) => {
      if (t.toLowerCase() === "neutral") {
        res.neutral += 1;
      } else if (
        t.toLowerCase() === "positive" ||
        t.toLowerCase() === "very positive"
      ) {
        res.positive += 1;
      } else {
        res.negative += 1;
      }
    });
    return res;
  }

  async function getSa() {
    await fetchAPI({ url: "sa" });
  }

  useEffect(async () => {
    getSa();
  }, []);

  useEffect(() => {
    if (data.status === true) {
      setSaData(convertSA(data.sa));
    }
  }, [isLoading, isError, data]);

  return (
    <Box as="section" id="sa" sx={styles.section}>
      <Container variant="container.big">
        <Heading as="h1" sx={styles.title}>
          Sentiment Analysis
        </Heading>
        {isLoading ? (
          <Text>Fetching from the market</Text>
        ) : data.status === false ? (
          <Text>Please try again</Text>
        ) : (
          <Flex>
            <SaCard score={saData.negative} total={total} type={"Negative"} />
            <SaCard score={saData.neutral} total={total} type={"Neutral"} />
            <SaCard score={saData.positive} total={total} type={"Positive"} />
          </Flex>
        )}
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    mt: ["5rem", "7rem"],
  },
  title: {
    mb: ["2rem"],
  },
};

export default SentimentAnalysisLayout;
