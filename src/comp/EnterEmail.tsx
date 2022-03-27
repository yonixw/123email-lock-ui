// https://chakra-ui.com/guides/integrations/with-formik
import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export function EnterEmail() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [remember, setRemember] = React.useState(false);

  //https://chakra-ui.com/docs/styled-system/theming/theme
  //https://github.com/chakra-ui/chakra-ui/discussions/5093
  //const bg_color = useColorModeValue("primary", "black.200"); // useColorModeValue("white.500", "black.200");

  const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        {
          email,
          pass,
          remember,
        },
        null,
        4
      )
    );
  };

  return (
    /*  <Flex bg="gray.100" align="center" justify="center" h="100vh"> */
    <Box bg={"primary"} p={6} rounded="md">
      <form onSubmit={formSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              variant="filled"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </FormControl>
          <Checkbox
            id="rememberMe"
            name="rememberMe"
            onChange={(e) => setRemember(e.target.checked)}
            isChecked={remember}
            colorScheme="purple"
          >
            Remember me?
          </Checkbox>
          <Button type="submit" colorScheme="purple" isFullWidth>
            Login
          </Button>
        </VStack>
      </form>
    </Box>
    /* </Flex> */
  );
}
