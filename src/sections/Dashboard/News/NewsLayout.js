import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Heading } from "@theme-ui/components";

import useFetch from "../../../useFetch";
import NewsCard from "./NewsCard";
import LoadingCard from "../../../components/LoadingCard";

function NewsLayout() {
  const { isLoading, isError, data, fetchAPI } = useFetch();
  const [newsData, setNewsData] = useState([]);

  async function getnews() {
    await fetchAPI({ url: "http://localhost:4000/news" });
  }

  useEffect(async () => {
    getnews();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setNewsData(data.news);
    }
  }, [isLoading, isError, data]);
  return (
    <Box as="section" id="top-news" sx={styles.section}>
      <Container variant="container.big">
        <Heading as="h1" sx={styles.title}>
          Top Crypto News
        </Heading>

        <Grid columns={[1, 2, "repeat(4, 1fr)"]} gap="1rem">
          {isLoading
            ? Array(4)
                .fill(1)
                .map((_, idx) => <LoadingCard />)
            : newsData?.map((data) => <NewsCard news={data} />)}
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

export default NewsLayout;
