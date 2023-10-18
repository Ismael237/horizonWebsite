import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text, Textarea } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";

function Contact() {
    return (
        <Flex flexDirection="column">
            <Box
                minH={{ base: "436px" }} pt={4}
                bgColor="richBlack.500"
                color="softWhite.500"
                px={{ base: "16px", md: "80px", lg: "124px", xl: "156px" }}
                pb={{ base: "250px", lg: "0" }}
            >
                <Header logoColor={1} />
                <Flex flexDirection="column" w="100%">
                    <Heading as="h3" fontSize="5xl" pb={6}>
                        Contactez horizon
                    </Heading>
                    <Text fontSize="md" pb="6" maxW="350px">
                        La solution a vos problèmes numériques.
                        Nous sommes à votre écoute !
                    </Text>
                    <Social />
                </Flex>
            </Box>
            <Flex
                flexDirection={{ base: "column", lg: "row" }}
                justifyContent="space-between"
                alignItems={{ base: "flex-start", lg: "center" }}
                position="relative"
                top={{ base: "-210px", lg: "-100px" }}
                gap={12}
                px={{ base: "0px", md: "80px", lg: "124px", xl: "156px" }}
            >
                <Flex
                    flexDirection="column" gap={14}
                    px={{ base: "16px", md: "0px" }}
                >
                    <Text maxW="450px"
                        fontSize={{ base: "md", lg: "xl" }}
                        lineHeight="tall"
                        color={{ base: "softWhite.500", lg: "richBlack.500" }}
                    >
                        N'hésitez pas à nous contacter pour toute
                        question, demande de renseignements ou
                        pour discuter de votre projet. Notre équipe
                        dévouée est prête à vous aider à réaliser vos
                        ambitions numériques.
                    </Text>
                    <Flex flexDirection="column" gap={2} display={{ base: "none", lg: "flex" }}>
                        <Heading as="h3" fontSize="md">
                            Autres moyen
                        </Heading>
                        <Text>horizon@gmail.com</Text>
                        <Text>655059273 / 655059273</Text>
                    </Flex>
                </Flex>
                <Box
                    w={{ base: "100%", lg: "500px" }}
                    rounded={{ base: "3xl", md: "2xl" }}
                    bgColor="softWhite.500"
                    border="1px solid" 
                    borderColor="blackAlpha.400"
                    px={{ base: 6, lg: 14 }}
                    py={{ base: 12, lg: 14 }}
                >
                    <Flex flexDirection="column" gap={4}>
                        <FormControl id="Nom">
                            <FormLabel>Votre nom</FormLabel>
                            <Input type="text" bgColor="white" h="52px" />
                        </FormControl>
                        <FormControl id="E-mail">
                            <FormLabel>Votre adresse E-mail</FormLabel>
                            <Input type="text" bgColor="white" h="52px" />
                        </FormControl>
                        <FormControl id="projet">
                            <FormLabel>Le nom de votre projet</FormLabel>
                            <Input type="text" bgColor="white" h="52px" />
                        </FormControl>
                        <FormControl id="Nom">
                            <FormLabel>Description votre projet</FormLabel>
                            <Textarea type="text" bgColor="white" />
                        </FormControl>
                        <FormControl id="Nom">
                            <FormLabel>Pieces jointes</FormLabel>
                            <Input type="text" bgColor="white" h="52px" />
                        </FormControl>
                        <Button colorScheme="primary">Envoyez</Button>
                    </Flex>
                </Box>
                <Flex 
                    flexDirection="column" gap={2} 
                    display={{ base: "flex", lg: "none" }}
                    px={{ base: "16px", md: "80px" }}
                >
                        <Heading as="h3" fontSize="md">
                            Autres moyen
                        </Heading>
                        <Text>horizon@gmail.com</Text>
                        <Text>655059273 / 655059273</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Contact;