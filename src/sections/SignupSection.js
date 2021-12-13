import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@theme-ui/components";

import img from "../assets/countdown.png";
import FormInput from "../components/Form/FormInput";
import { useUserDispatch } from "../contexts/user/user.provider";
import useFetchAPI from "../useFetch";

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  re_password: "",
};

function SignupSection() {
  const [userState, setUserState] = useState(initState);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useUserDispatch();
  const { isLoading, isError, data, fetchAPI } = useFetchAPI();

  function handleChange(e) {
    setError("");
    setUserState((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (userState.password !== userState.re_password) {
      setError("Password do not match");
    } else if (
      userState.password === "" ||
      userState.first_name === "" ||
      userState.last_name === "" ||
      userState.email === ""
    ) {
      setError("All the fields are mandatory");
    } else {
      await fetchAPI({ url: "user/signup", method: "POST", body: userState });
    }
  }

  useEffect(() => {
    if (data.status === true) {
      dispatch({ type: "LOGIN", payload: { token: data.token } });
      router.push("/dashboard");
    } else if (data.status === false || isError) {
      setError(data.message);
    }
  }, [isLoading, isError, data]);

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
            {error !== "" && <Text color="red">{error}</Text>} <br />
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
