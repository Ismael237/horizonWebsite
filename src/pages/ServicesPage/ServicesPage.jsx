import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Header from '../../components/Header/Header';
import ServiceItems from './components/ServiceItem/ServiceItems';

function ServicesPage() {
    return (
        <Flex flexDirection="column" gap={6}>
            <Box h={{xl: "70vh"}} pt={4} pb={{base: "75px", xl: null}} pos="relative" color="softWhite.500" bgImg="url('./imgs/Rectangle6.png')">
                <Box 
                    bgColor="richBlack.500"
                    opacity={0.7}
                    w="100%" 
                    h="100%" 
                    pos="absolute" 
                    top={0} 
                    zIndex={1}
                ></Box>
                <Box px={{ base: "16px",md: "80px", lg: "124px", xl: "156px" }} pos="relative" zIndex={10}>
                    <Header logoColor={1} />
                    <Flex flexDirection="column" alignItems="center" w="100%">
                        <Heading as="h4" fontSize="5xl" pb={6} textAlign="center">
                            Les Services d’horizon
                        </Heading>
                        <Text fontSize="sm" textAlign="center" pb="6" maxW="500px">
                            Explorez et découvrez la vaste gamme de service qu'offre
                            horizon pour concrétiser vos ambitions numériques avec
                            nos compétences et notre expertise exceptionnelles.
                        </Text>
                    </Flex>
                </Box>
            </Box>
            <Box px={{ base: "16px",md: "80px", lg: "124px", xl: "156px" }}>
                <ServiceItems/>
            </Box>
        </Flex>
    )
}

export default ServicesPage;