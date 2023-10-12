import { Box, Flex, Heading } from "@chakra-ui/react"
import Section from "./components/Section/Section";

function ReasonSection() {

    const reasonList = [
        {
            imgName: "Group_18.png",
            title: "Expertise Inégalée",
            content: `Notre équipe de talents chevronnés est à la pointe des
            dernières tendances technologiques. Nous maîtrisons les
            technologies les plus récentes pour garantir que votre
            entreprise reste en avance dans un monde en constante
            évolution.`,
            reverse: false,
        },
        {
            imgName: "Group_17.png",
            title: "Solutions Sur Mesure",
            content: `Chaque entreprise est unique, c'est pourquoi nous créons des
            solutions sur mesure qui répondent précisément à vos besoins.
            Notre approche personnalisée assure que chaque projet est une
            réponse adéquate à vos défis spécifiques.`,
            reverse: true,
        },
        {
            imgName: "Group_19.png",
            title: "Innovation Continue",
            content: `Nous ne nous reposons jamais sur nos lauriers. L'innovation est
            notre moteur, et nous cherchons constamment de nouvelles
            façons de faire évoluer votre entreprise grâce à la technologie.`,
            reverse: false,
        }
    ]
    return (
        <Box pb="150px">
            <Flex pb={6} justifyContent="center">
                <Heading >Pourquoi nous choisir ?</Heading>
            </Flex>
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

export default ReasonSection;