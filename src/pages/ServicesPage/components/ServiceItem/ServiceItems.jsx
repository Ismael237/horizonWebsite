import { Box, Flex, Heading } from "@chakra-ui/react"
import Section from "./components/Section/Section";

function ServiceItems() {

    const reasonList = [
        {
            imgName: "Rectangle2.png",
            title: "Development d’application web",
            content: `Nous excellons dans le développement d'applications web sur
            mesure, offrant des solutions parfaitement adaptées à vos
            besoins. Notre expertise transforme vos idées en expériences web
            exceptionnelles.`,
            reverse: false,
        },
        {
            imgName: "iPhoneSolo.png",
            title: "Development d’application mobile",
            content: `Boostez votre entreprise avec le développement mobile de pointe
            chez Horizon. Nous créons des applications mobiles innovantes
            qui captivent vos utilisateurs, stimulent l'engagement et amplifient
            votre impact sur le marché`,
            reverse: true,
        },
        {
            imgName: "Macbook.png",
            title: "Development d’application desktop",
            content: `Découvrez la puissance du développement d'applications de
            bureau avec Horizon. Nous concevons des solutions qui optimisent
            la productivité de votre entreprise. Donnez vie à vos idées avec
            notre expertise.`,
            reverse: false,
        }
    ]
    return (
        <Box pb="150px">
            <Flex flexDirection="column" py={12} gap={24}>
                {
                    reasonList.map((reason, i) => {
                        return <Section
                            imgName={reason.imgName}
                            title={reason.title}
                            content={reason.content}
                            reverse={reason.reverse}
                            key={i}
                        />
                    })
                }
            </Flex>
        </Box>
    )
}

export default ServiceItems;