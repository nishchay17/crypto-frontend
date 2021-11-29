import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
} from "@theme-ui/components";

import img from "../assets/countdown.png";
import FormInput from "../components/Form/FormInput";
import { useUserDispatch } from "../contexts/user/user.provider";

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  re_password: "",
};

function SignupSection() {
  const [userState, setUserState] = useState(initState);
  const router = useRouter();
  const dispatch = useUserDispatch();

  function handleChange(e) {
    setUserState((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserState(initState);
    dispatch({ type: "LOGIN" });
    router.push("/dashboard");
  }

  return (
    <Box as="section" id="signup" sx={styles.section}>
      <Container>
        <Heading as="h1">Signup</Heading>
        <Flex sx={styles.wrapper}>
          <Box as="form" sx={styles.formWrapper} onSubmit={handleSubmit}>
            <FormInput
              label="First name"
              name="first_name"
              value={userState.first_name}
              onChange={handleChange}
            />
            <FormInput
              label="Last name"
              name="last_name"
              value={userState.last_name}
              onChange={handleChange}
            />
            <FormInput
              label="Email"
              name="email"
              value={userState.email}
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              name="password"
              value={userState.password}
              onChange={handleChange}
              type="password"
            />
            <FormInput
              label="Re-enter password"
              name="re_password"
              value={userState.re_password}
              onChange={handleChange}
              type="password"
            />
            <Button mt="1.5rem">Signup</Button>
          </Box>
          <Image src={img} sx={styles.img} />
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    overflow: "hidden",
    mt: ["5rem", "7rem"],
  },
  wrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  formWrapper: {
    mt: "1.5rem",
    width: ["100%", "auto"],
  },
  img: {
    display: ["none", "none", "none", "block"],
    height: ["100%", "22rem"],
    width: ["auto"],
  },
};

export default SignupSection;