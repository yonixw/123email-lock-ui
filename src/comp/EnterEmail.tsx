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
  Center,
  Heading,
} from "@chakra-ui/react";

export function EnterEmail() {
  const [email, setEmail] = React.useState("");

  const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        {
          email,
        },
        null,
        4
      )
    );
  };

  return (
    /*  <Flex bg="gray.100" align="center" justify="center" h="100vh"> */
    <Box bg="boxbg" p={6} rounded="md">
      <VStack spacing={4} align="flex-start">
        <form onSubmit={formSubmit} style={{ width: "100%" }}>
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
            <Button type="submit" colorScheme="brand" isFullWidth>
              Login
            </Button>
          </VStack>
        </form>
        <Center style={{ width: "100%" }}>
          <Heading as="h3" size="lg">
            ⧟ OR ⧟{" "}
          </Heading>
        </Center>
        <Button colorScheme="brand" isFullWidth>
          Generate New
        </Button>
      </VStack>
    </Box>
    /* </Flex> */
  );
}
