import { Box, Button, Heading, Image, HStack, VStack, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HeroBanner() {
    const navigate = useNavigate();
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center" gap={12}
            flexDirection={{ base: "column-reverse", md: "row" }}
        >
            <Flex flexDirection="column" maxW={{ base: "100%", md: "460px" }} gap={6}>
                <Heading fontSize="3em">
                    Bienvenue Chez horizon
                </Heading>
                <Text>
                    Votre partenaire stratégique pour libérer le potentiel illimité du monde numérique !
                </Text>
                <Button
                    size="lg"
                    w={{ base: "100%", sm: "fit-content" }}
                    onClick={() => navigate("Contact")}
                >Contactez nous</Button>
            </Flex>
            <Box w={{ base: "80%", md: "450px" }}>
                <Image src="./imgs/firstSection.png" />
            </Box>
        </Flex>
    )
}

export default HeroBanner;