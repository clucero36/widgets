import { whiten } from '@chakra-ui/theme-tools';

export const LinkStyles = {

    baseStyle: {},

    sizes: {},

    variants: {
        primary: {
            color: 'teal',
            _hover: {
                color: whiten('yellow.200', 30),
            },
            _focus: {
                color: 'yellow.200',
                boxShadow: 'none',
            }
        },

    },

    defaultProps: {},
} 