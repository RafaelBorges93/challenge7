import { Flex, Heading, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import { Banner } from "../components/Banner";
import Characteristics from "../components/Characteristics";
import Separator from "../components/Separator";
import Slider from "../components/Slider";
// import { Logo } from "../components/Header/Logo";

export default function Home() {
  return (
    <Flex direction="column">      
      <Header/>
      <Banner/> 
      <Characteristics/>   
      <Separator/>  

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading> 

      <Slider/> 
    </Flex>
  )
}
