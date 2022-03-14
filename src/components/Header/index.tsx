import { Flex, Grid, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/"

  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      px
      ="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1500px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >

        {notHomePage && (
          <Link href='/' >
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/images/Logo.svg"
          alt="logo"
          justifySelf="center"
          gridColumn="2"          
        />
      </Grid>
    </Flex>
  )
}