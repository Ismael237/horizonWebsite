import { Box, Heading, Flex, Text, HStack } from "@chakra-ui/react";
import ServiceCard from './components/ServiceCard/ServiceCard';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function ServicesSection() {

    const servicesList = [
        {
            imgName: "Rectangle1.png",
            title: "Developement d’application web",
            content: `Nous excellons dans le développement
            d'applications web sur mesure, offrant
            des solutions parfaitement adaptées à
            vos besoins. Notre expertise transforme
            vos idées en expériences web
            exceptionnelles.`,
        },
        {
            imgName: "iPhoneSolo.png",
            title: "Development d’application mobile",
            content: `Boostez votre entreprise avec le
            développement mobile de pointe chez
            Horizon. Nous créons des applications
            mobiles innovantes qui captivent vos
            utilisateurs, stimulent l'engagement et
            amplifient votre impact sur le marché`,
        },
        {
            imgName: "Rectangle1.png",
            title: "Development d’application PC",
            content: `Découvrez la puissance du
            développement d'applications de bureau
            avec Horizon. Nous concevons des
            solutions qui optimisent la productivité
            de votre entreprise. Donnez vie à vos
            idées avec notre expertise.`,
        },
    ]

    const linkStyle = {
        textDecoration: "underline",
        color: "primary.500",
        _hover: { color: "primary.300" },
        _active: { color: "primary.600" },
    }

    return (
        <Box pb="50px">
            <Flex pb="50px" justifyContent="center">
                <Heading >Nos Services</Heading>
            </Flex>
            <Flex justifyContent="space-between" gap={8} flexDirection={{ base: "column", lg: "row" }}>
                {
                    servicesList.map((service, i) => {
                        return <ServiceCard
                            imgName={service.imgName}
                            title={service.title}
                            content={service.content}
                            key={i}
                        />
                    })
                }
            </Flex>
            <Flex justifyContent="flex-end" py={12}>
                <Link to="/Services" >
                    <HStack {...linkStyle}>
                        <Text>Voir tout nos services</Text>
                        <MdArrowRightAlt />
                    </HStack>
                </Link>
            </Flex>
        </Box>
    )
}

export default ServicesSection;