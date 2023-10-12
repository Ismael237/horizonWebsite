import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";

function DesktopNav() {
    const linkStyle = {
        textDecoration: "underline",
        _hover: { color: "primary.300" },
        _active: { color: "primary.600" }
    }
    return (
        <HStack gap={6}>
            <NavLink
                style={({isActive}) => { return { color: isActive ? "#bb342f" : "" } }}
                to="/"
            >
                <Text {...linkStyle}>
                    Accueil
                </Text>
            </NavLink>
            <NavLink
                style={({isActive}) => { return { color: isActive ? "#bb342f" : "" } }}
                to="/Services">
                <Text {...linkStyle}>
                    Nos services
                </Text>
            </NavLink>
            <NavLink
                style={({isActive}) => { return { color: isActive ? "#bb342f" : "" } }}
                to="/Contact">
                <Text {...linkStyle}>
                    Contactez-Nous
                </Text>
            </NavLink>
        </HStack>
    );
}

function MobileNav() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => { setIsOpen(s => !s) };

    const LinkList = () => {
        return (
            <>
                <Box
                    bgColor="richBlack.500"
                    opacity={0.7}
                    w="100vw"
                    h="100vh"
                    pos="fixed"
                    top={0}
                    left={0}
                    zIndex={10}
                    onClick={handleClick}
                ></Box>
                <Flex
                    flexDirection="column"
                    h="100vh"
                    pos="fixed"
                    top="0"
                    translateY="-50%"
                    right={0}
                    zIndex={20}
                    bgColor="softWhite.500"
                    color="richBlack.500"
                    px={4}
                    py={6}
                >
                    <Flex justifyContent="flex-end" mt="2" mb={4}>
                        <Box borderRadius={4} p={1} cursor="pointer" onClick={handleClick} w="fit-content" >
                            <MdClose size="30px" />
                        </Box>
                    </Flex>
                    <VStack gap={6} alignItems="flex-start" pr={12}>
                        <Link to="/">
                            <Text textDecoration="underline">
                                Accueil
                            </Text>
                        </Link>
                        <Link to="/Services">
                            <Text textDecoration="underline">
                                Nos services
                            </Text>
                        </Link>
                        <Link to="/Contact">
                            <Text textDecoration="underline">
                                Contactez-Nous
                            </Text>
                        </Link>
                    </VStack>
                </Flex>
            </>
        )
    };

    return (
        <>
            <Box borderRadius={4} p={1} cursor="pointer" onClick={handleClick}>
                <MdMenu size="30px" />
            </Box>
            {isOpen && <LinkList />}
        </>
    );
}

function Header({ logoColor }) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth)
        })
    }, [windowSize]);

    return (
        <Flex alignItems="center" justifyContent="space-between" py={4} mb="78px">
            <Link to="/">
                <Image src={`./imgs/logo${logoColor}.svg`} />
            </Link>
            {windowSize > 850 ? <DesktopNav /> : <MobileNav />}
        </Flex>
    )
}

export default Header