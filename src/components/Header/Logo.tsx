import { AspectRatio, Center, Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return ( 
    <Flex width="1200px" height="100px" display="flex" justify="center" bg="withe">
      <Flex >
        <Image src="/images/Logo.svg" alt="logo" margin={6}/>
      </Flex> 
    </Flex> 
  )
}