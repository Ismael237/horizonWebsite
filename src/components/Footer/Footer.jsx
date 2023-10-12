import { Box, Flex, Heading, Image, Link, Text, Wrap } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Social from "../Social/Social";

function Footer() {
    const linkStyle = {
        _hover: { color: "primary.400" },
        _active: { color: "primary.600" },
    }
    return (
        <Box
            color="softWhite.700"
            bgColor="richBlack.500" w="100vw"
            px={{ base: "16px", md: "80px", lg: "124px", xl: "156px" }}
            py={12}
        >
            <Wrap justify={{ lg: "space-between" }} mb={16} spacing={{ base: "14", md: "8" }}>
                <Flex maxW="190px" flexDirection="column" gap={6}>
                    <Link to="/">
                        <Image src="./imgs/logo1.svg" />
                    </Link>
                    <Text>
                        Votre partenaire
                        stratégique pour libérer
                        le potentiel illimité du
                        monde numérique.
                    </Text>
                </Flex>
                <Flex flexDirection="column" gap={6}>
                    <Heading fontSize="sm" textTransform="uppercase" color="softWhite.500">
                        Liens rapides
                    </Heading>
                    <Flex flexDirection="column" gap={2} textDecoration="underline">
                        <ReactRouterLink to="/">
                            <Text {...linkStyle}>
                                Accueil
                            </Text>
                        </ReactRouterLink>
                        <ReactRouterLink to="/Services">
                            <Text {...linkStyle}>
                                Nos Services
                            </Text>
                        </ReactRouterLink>
                        <ReactRouterLink to="/Contact">
                            <Text {...linkStyle}>
                                Contactez Nous
                            </Text>
                        </ReactRouterLink>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" gap={6}>
                    <Heading fontSize="sm" textTransform="uppercase" color="softWhite.500">
                        Services
                    </Heading>
                    <Flex flexDirection="column" fontSize="sm" gap={3} maxW="190px">
                        <Text>
                            Creation site web
                        </Text>
                        <Text>
                            Développement application mobile
                        </Text>
                        <Text>
                            Développement d’application de bureau
                        </Text>
                        <Text>
                            Pentesting
                        </Text>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" gap={6}>
                    <Heading fontSize="sm" textTransform="uppercase" color="softWhite.500">
                        Contact
                    </Heading>
                    <Flex flexDirection="column" gap={2} textDecoration="underline">
                        <Link to="/">
                            horizon@gmail.com
                        </Link>
                        <Link to="/">
                            655059273 / 655059273
                        </Link>
                        <Link to="/">
                            Bafoussam, CAMEROUN
                        </Link>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" gap={6}>
                    <Heading fontSize="sm" textTransform="uppercase" color="softWhite.500">
                        Social
                    </Heading>
                    <Social />
                </Flex>
            </Wrap>
            <Text fontSize="xs">© Copyright HORIZON Inc </Text>
        </Box>
    )
}

export default Footer;