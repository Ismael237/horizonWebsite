import { Box, Flex } from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ReasonSection from './components/ReasonSection/ReasonSection';

function Homepage() {
  return (
    <Box bgColor="softWhite.500" px={{ base: "16px",md: "80px", lg: "124px", xl: "156px" }}>
      <Flex flexDirection="column" gap={6}>
        <Box h={{lg: "100vh"}} maxH={{lg: "623px"}} pt={4} mb={{base: "50px", lg: null}}>
          <Header logoColor={2}/>
          <HeroBanner />
        </Box>
        <ServicesSection />
        <ReasonSection />
      </Flex>
    </Box>
  )
}

export default Homepage;