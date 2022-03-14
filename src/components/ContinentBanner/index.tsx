import { Flex, Heading } from "@chakra-ui/react";

export default function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "700px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/images/bannereu.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        marginTop={["0", "160px"]}
        marginLeft={["0" ,"70px"]}
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "6xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>

    </Flex>
  )
}