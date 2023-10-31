import { Box, Button, Flex, FormControl, FormLabel, Heading, Text, Textarea } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import Header from "../../components/Header/Header";
import Social from "../../components/Social/Social";
import Field from "../../components/Field/Field";
import { useState } from "react";

function Contact() {
    
    const initialFormData = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        project_name: 'Projet XYZ',
        description: `Un projet de démonstration pour tester l'envoi d'e-mails.`,
    }

    const [formData, setFormData] = useState(initialFormData);
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        const updatedForm = { ...formData, [name]: value };
        setFormData(updatedForm);
    }

    const sendEmail = async (e) => {
        e.preventDefault();
        const isValid = Object.values(formData).every((value) => value && value.trim() !== '');
        if (isValid) {
            try {
                const res = await emailjs.send(serviceId, templateId, formData, publicKey)
                console.log(res.text);
            } catch (error) {
                console.log(error.text);
            }
        }
    };


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
                        <Field
                            label="Votre nom"
                            inputName="name"
                            type="text"
                            error=""
                            value={formData.name}
                            onChange={handleFormChange}
                        />
                        <Field
                            label="Votre adresse E-mail"
                            inputName="email"
                            type="email"
                            error=""
                            value={formData.email}
                            onChange={handleFormChange}
                        />
                        <Field
                            label="Le nom de votre projet"
                            inputName="project_name"
                            type="text"
                            error=""
                            value={formData.project_name}
                            onChange={handleFormChange}
                        />
                        <FormControl>
                            <FormLabel>Description votre projet</FormLabel>
                            <Textarea
                                type="text"
                                bgColor="white"
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                            />
                        </FormControl>
                        <Button colorScheme="primary" onClick={sendEmail}>Envoyez</Button>
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