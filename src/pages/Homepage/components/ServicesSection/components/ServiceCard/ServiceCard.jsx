import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ServiceCard({ imgName, title, content }) {
    const linkStyle = {
        textDecoration: "underline",
        color: "primary.500",
        _hover: { color: "primary.300" },
        _active: { color: "primary.600" },
    }

    return (
        <Flex
            backgroundColor="white"
            w={{ base: "100%", lg: "340px" }}
            flexDirection={{ base: "column", md: "row", lg: "column" }}
            alignItems={{ base: "center", }}
            justifyContent={{ base: null, sm: "space-between", lg: null }}
            gap={8} px={8} pt={6} pb={8}
            borderRadius={12}
        >
            <Box
                minW={{ base: "150px", lg: "150px" }}
                minH={{ base: "150px", sm: "fit-content", lg: "fit-content" }}
            >
                <Image src={`./imgs/${imgName}`} />
            </Box>
            <Box>
                <Heading as="h4" fontSize="md" mb={4} textAlign={{ base: "center", sm: "left", lg: "center" }}>
                    {title}
                </Heading>
                <Text fontSize="sm" color="richBlack.100" textAlign={{ base: "center", sm: "left", lg: "center" }} mb={4}>
                    {content}
                </Text>
                <Flex justifyContent={{ base: "center", sm: "flex-start", lg: "center" }} w="100%">
                    <Link to="/Contact">
                        <Text {...linkStyle}>
                            Contactez nous des maintenant
                        </Text>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}

export default ServiceCard;