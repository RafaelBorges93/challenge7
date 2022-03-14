import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
 return (
   <>
  <Box borderRadius="4px" overflow="hidden">
    <Image src="/images/londres.jpg" alt="londres" h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="500">Londres</Heading>
        <Text mt="3" fontSize="xl" color="gray.500" fontWeight="500">Reino Unido</Text>
      </Flex>
      <Image src="/images/flagReinoUnido.png" alt="flag" w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>

  <Box borderRadius="4px" overflow="hidden">
    <Image src="/images/paris.jpg" alt="paris" h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="500">Paris</Heading>
        <Text mt="3" fontSize="xl" color="gray.500" fontWeight="500">França</Text>
      </Flex>
      <Image src="/images/flagFrança.png" alt="flag" w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>

  <Box borderRadius="4px" overflow="hidden">
    <Image src="/images/roma.jpg" alt="roma" h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="500">Roma</Heading>
        <Text mt="3" fontSize="xl" color="gray.500" fontWeight="500">Itália</Text>
      </Flex>
      <Image src="/images/flagItalia.png" alt="flag" w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>

  <Box borderRadius="4px" overflow="hidden">
    <Image src="/images/praga.jpg" alt="praga" h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="500">Praga</Heading>
        <Text mt="3" fontSize="xl" color="gray.500" fontWeight="500">República Tcheca</Text>
      </Flex>
      <Image src="/images/flagRepublicaTcheca.png" alt="flag" w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>

  <Box borderRadius="4px" overflow="hidden">
    <Image src="/images/amsterdã.jpg" alt="amsterdã" h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="2xl" fontWeight="500">Amsterdã</Heading>
        <Text mt="3" fontSize="xl" color="gray.500" fontWeight="500">Holanda</Text>
      </Flex>
      <Image src="/images/flagHolanda.png" alt="flag" w="40px" h="40px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>
</>
 )
}