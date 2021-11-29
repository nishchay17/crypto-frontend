import React from "react";
import { Box, Button, Flex, Heading, Text } from "@theme-ui/components";
import { css } from "@emotion/react";

function NewsCard({ news }) {
  return (
    <Flex sx={styles.card}>
      <Box>
        <Heading
          as="h4"
          sx={styles.heading}
          css={css`
            text-decoration: none;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          `}
        >
          {news.title}
        </Heading>
        <Text
          as="p"
          css={css`
            text-decoration: none;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
          `}
        >
          {news.description}
        </Text>
      </Box>
      <a href={news.url} target="_blank">
        <Button sx={styles.btn}> Read Full Article</Button>
      </a>
    </Flex>
  );
}

const styles = {
  card: {
    p: "1rem",
    height: "19rem",
    bg: "border_color",
    borderRadius: "7px",
    border: "2px solid black",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    mb: ["1rem"],
    fontSize: "1.4rem",
  },
  title: {
    mb: ["0.5rem"],
    fontSize: "1.2rem",
  },
  btn: {
    backgroundColor: "heading_secondary",
    borderRadius: "7px",
    lineHeight: 1,
    fontSize: ["0.8rem"],
    padding: "0.7rem 1rem",
    fontWeight: 700,
    alignItems: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    transition: "all 300ms ease",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default NewsCard;
