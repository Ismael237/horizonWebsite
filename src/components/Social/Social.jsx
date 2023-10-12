import { Center, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Facebook from "../Icons/Facebook"
import Twitter from "../Icons/Twitter"
import Instagram from "../Icons/Instagram"
import WhatsApp from "../Icons/WhatsApp"

function Social() {
    return (
        <Flex gap={2} textDecoration="underline">
            <Link to="/">
                <Center w="20px">
                    <Facebook />
                </Center>
            </Link>
            <Link to="/">
                <Center w="20px">
                    <Twitter />
                </Center>
            </Link>
            <Link to="/">
                <Center w="20px">
                    <Instagram />
                </Center>
            </Link>
            <Link to="/">
                <Center w="20px">
                    <WhatsApp />
                </Center>
            </Link>
        </Flex>
    )
}

export default Social