import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        borderRadius: 'base',
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 6,
            h: "32px",
        },
        md: {
            fontSize: 'md',
            px: 4,
            h: "42px",
        },
    },
    variants: {
        outline: {
            color: 'primary.900',
        },
        solid: {},
        ghost: {
            color: 'primary.500',
        },
        disable: {
            bgColor: 'blackAlpha.300',
            color: 'neutral.300',
            _hover: {
                bgColor: 'blackAlpha.400',
            },
            _active: {
                bgColor: 'blackAlpha.500',
            }
        },
    },
    defaultProps: {
        variant: 'solid',
        colorScheme: 'primary'
    },
})


const theme = extendTheme({
    colors: {
        primary: {
            900: '#701f1c',
            800: '#832421',
            700: '#962a26',
            600: '#a82f2a',
            500: '#bb342f',
            400: '#c24844',
            300: '#c95d59',
            200: '#cf716d',
            100: '#d68582',
            50: '#dd9a97',
        },
        softWhite: {
            900: '#949495',
            800: '#adadae',
            700: '#c6c6c7',
            600: '#dedee0',
            500: '#f7f7f9',
        },
        richBlack: {
            900: '#080b14',
            800: '#090d17',
            700: '#0a0f1a',
            600: '#0c111e',
            500: '#0d1321',
            400: '#252b37',
            300: '#3d424d',
            200: '#565a64',
            100: '#6e717a',
            50: '#868990',
        },
    },
    fonts: {
        body: "Lexend, sans-serif",
        heading: "SpaceGrotesk, sans-serif",
        mono: "SpaceGrotesk, monospace",
    },
    components: {
        Button,
    },
});


export default theme;