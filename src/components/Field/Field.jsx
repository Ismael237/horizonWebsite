import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
} from '@chakra-ui/react'


function Field({ error, label, inputName, onChange, type, value }) {
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={type}>{label}</FormLabel>
            <Input
                id={type}
                name={inputName}
                value={value}
                onChange={onChange}
                type={type}
                bgColor="white" h="52px"
            />
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </FormControl>
    )
}

export default Field;
