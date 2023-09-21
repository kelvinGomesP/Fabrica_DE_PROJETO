import React from "react";
import {
  Flex,
  Box,
  Center,
  Image,
  Text,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh" bg="purple.100">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        CARTÃO DE VISITA
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="teal.100"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <Box display="flex" flexDir="column" alignItems="center" gap="4">
            <Image
              src="/Templates/unnamed.jpg"
              alt="Imagem de Julia"
              w="150px"
              h="150px"
              borderRadius="50%"
            />
            <Text fontSize="2xl" fontWeight="bold" color="purple.800">
              Meu nome é Julia
            </Text>
            <Button
              w={240}
              p="6"
              type="submit"
              bg="purple.600"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              mt="2"
              _hover={{ bg: "purple.800" }}
            >
              Enviar
            </Button>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;

