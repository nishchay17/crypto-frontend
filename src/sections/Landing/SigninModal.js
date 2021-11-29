import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading } from "@theme-ui/components";
import { AiOutlineCloseCircle } from "react-icons/ai";

import FormInput from "../../components/Form/FormInput";
import Modal from "../../components/Modal";
import {
  useUserDispatch,
  useUserState,
} from "../../contexts/user/user.provider";

const initState = { email: "", password: "" };

function SigninModal({ handleIsOpen, isOpen }) {
  const [loginInfo, setLoginInfo] = useState(initState);
  const router = useRouter();
  const user = useUserState("isLoggedin");
  const dispatch = useUserDispatch();

  function handleChange(e) {
    setLoginInfo((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoginInfo(initState);
    dispatch({ type: "LOGIN" });
    router.push("/dashboard");
  }

  return (
    <Modal isOpen={isOpen} handleClose={handleIsOpen}>
      <Flex sx={styles.headingLine}>
        <Heading>Sign in</Heading>
        <Button variant="text" onClick={() => handleIsOpen(false)}>
          <AiOutlineCloseCircle size="2rem" />
        </Button>
      </Flex>
      <Box as="form" mt="2rem" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={loginInfo.password}
          onChange={handleChange}
          label="Password"
        />
        <Button sx={styles.btn}>Login</Button>
      </Box>
    </Modal>
  );
}

const styles = {
  headingLine: {
    width: ["100%", "25rem"],
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    mt: "2rem",
  },
};

export default SigninModal;
