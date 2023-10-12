import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

function Section({ imgName, title, content, reverse }) {
    let style = {flexDirection: { base: "column", md: "row" } };
    if(reverse){
        style = {
            flexDirection: { base: "column", md: "row-reverse" },
        }
    }
    return (
        <Flex gap={12} alignItems="center" {...style}>
            <Box w={{ base: "100%", md: "500px" }}>
                <Image src={`./imgs/${imgName}`} />
            </Box>
            <Box flexDirection="column" h="fit-content">
                <Heading as="h4" fontWeight="normal" fontSize="3xl" pb={6}>
                    {title}
                </Heading>
                <Text fontSize="md" color="richBlack.100" maxW="500px" lineHeight="taller">
                    {content}
                </Text>
            </Box>
        </Flex>
    )
}

export default Section