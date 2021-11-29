import React, { useState } from "react";
import Image from "next/image";
import { Container, Box, Heading, Text, Link, Button, Flex } from "theme-ui";
import { AiOutlineRightCircle } from "react-icons/ai";
import { VscChevronDown } from "react-icons/vsc";
import { keyframes } from "@emotion/react";

import BannerImage from "../../assets/banner-1.png";
import SigninModal from "./SigninModal";

const BANNER_DATA = {
  title: "Welcome To The Crypto Alerts",
  text: "We help users to track, and understand cryptocurrency market seamlessly",
  signup: {
    link: "/sign-up",
    label: "Sign up now",
  },
  signin: {
    label: "Sign in",
  },
  bannerImage: BannerImage,
};

const upDown = keyframes`
0% {
  transform:translateY(0rem)
}
25% {
  transform:translateY(-0.4rem)
}
50% {
  transform:translateY(0rem)
}
75% {
  transform:translateY(0.4rem)
}
100% {
  transform:translateY(0rem)
}
`;

const Banner = () => {
  const { title, text, signup, signin, bannerImage } = BANNER_DATA;
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen(newState) {
    setIsOpen(newState);
  }

  return (
    <>
      <Box as="section" id="banner" sx={styles.section}>
        <Container sx={styles.container}>
          <Box sx={styles.content}>
            <Heading as="h1">{title}</Heading>
            <Text as="p" sx={styles.content.para}>
              {text}
            </Text>
            <Box sx={styles.btnWrap}>
              <Link href={signup.link} sx={styles.btn}>
                {signup.label}
              </Link>
              <Button sx={styles.signinBtn} onClick={() => handleIsOpen(true)}>
                {signin.label}
                <AiOutlineRightCircle />
              </Button>
            </Box>
            <Flex sx={styles.scroll}>
              <Text as="p">Scroll to know more</Text>
              <VscChevronDown size="1.5rem" />
            </Flex>
          </Box>
          <Box sx={styles.sectionImage}>
            <Image
              src={bannerImage}
              alt="Hero Banner"
              width={740}
              height={442}
            />
          </Box>
        </Container>
      </Box>
      <SigninModal handleIsOpen={handleIsOpen} isOpen={isOpen} />
    </>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: "hidden",
    pt: ["115px", null, null, "140px", "150px", "170px", "185px"],
    pb: ["60px", "75px", null, "90px", "110px", "120px", "140px", "160px"],
    mb: ["3rem", "3rem"],
    mt: ["4rem", "1rem"],
  },
  container: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: ["column", null, null, "row"],
  },
  content: {
    maxWidth: ["100%", null, null, "355px", "460px", "545px", null, "590px"],
    textAlign: ["center", null, null, "left"],
    h1: {
      fontSize: ["28px", "32px", null, "34px", "40px", "48px", "54px", "58px"],
      lineHeight: [1.4, null, null, 1.2],
      color: "heading",
      fontFamily: "archivo",
      letterSpacing: "-1.5px",
      fontWeight: "body",
      mx: ["0", null, null, "auto", "0"],
    },
    para: {
      fontSize: ["15px", null, null, null, "16px", "17px"],
      lineHeight: [1.85, null, 1.9, null, 1.5, 1.5],
      mt: [3, null, null, "18px"],
      pr: [0, null, null, null, null, null, null, "50px"],
      color: "text_secondary",
    },
  },
  btnWrap: {
    display: "flex",
    alignItems: "center",
    mt: ["25px", null, null, "30px", "35px", "50px"],
    justifyContent: ["center", null, null, "flex-start"],
  },
  btn: {
    backgroundColor: "heading_secondary",
    borderRadius: "7px",
    lineHeight: 1,
    fontSize: ["13px", "14px", "15px"],
    padding: ["14px 20px 13px", "14px 25px 13px", "17px 30px 15px"],
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    textTransform: "uppercase",
    color: "#ffffff",
    transition: "all 300ms ease",
    "&:hover": {
      opacity: 0.8,
      transform: "scale(1.02)",
    },
  },
  signinBtn: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "heading_secondary",
    cursor: "pointer",
    textTransform: "uppercase",
    padding: 0,
    fontSize: ["13px", null, "15px", null, "17px"],
    fontWeight: 700,
    fontFamily: "body",
    ml: ["20px", null, null, "25px", "30px"],
    outline: "none",
    svg: {
      ml: [1, null, 2],
      fontSize: ["17px", "18px", "20px"],
      position: "relative",
      top: "-1px",
    },
  },
  scroll: {
    alignItems: "center",
    mt: "2rem",
    justifyContent: ["center", "center", "center", "flex-start"],
    p: {
      mr: "1rem",
    },
    svg: {
      animation: `${upDown} 2s linear infinite`,
    },
  },
  sectionImage: {
    mt: ["40px", null, null, 0],
    pl: [0, null, null, "30px", 0],
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    right: ["auto", null, null, null, "-10px", "-50px", "-70px"],
    width: [
      null,
      null,
      null,
      "calc(100% - 355px)",
      "calc(100% - 460px)",
      "calc(100% - 545px)",
      null,
      "calc(100% - 590px)",
    ],
    textAlign: ["center", null],
  },
};
