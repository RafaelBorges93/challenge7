import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CharacteristicsProps {
  icon: string;
  text: string;
}

export default function Characteristic({icon, text}: CharacteristicsProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? <Image alt="icons" src={`/icons/${icon}.svg`} w="85" h="85px" mb="6"/> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]} >{text}</Text>
    </Flex>
  )
}