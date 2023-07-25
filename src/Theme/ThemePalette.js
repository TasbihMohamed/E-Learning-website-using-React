import { createTheme } from '@mui/material'

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Quicksand,sans-serif',
        ].join(','),
        h1: {
            fontFamily: [
                'Quicksand,sans-serif',
            ].join(','),
            fontSize: '40px',
            fontWeight: '600'
        },
    },
    button: {
        fontFamily: [
            'Quicksand',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#28a19c',
        },
        secondary: {
            main: '#ffba00',
        },
        info: {
            main: '#FFFFFF',
        },
    },
    theme_palette: {
        primaryColor: '#28a19c',
        secondryColor: '#ffba00',
        whiteColor: '#fff',
        warmGrey: '#707070',
        warmGrey2: '#938f8c',
        warmGrey3: '#767676',
        warmGrey4:'#9b9b9b',
        green: '#34B7F1',
        whiteTwo: '#f3f3f3',
        whiteThree:'#f8f8f8',
        yellow: '#f7b52e',
        blackTwo: '#343434',
        white: '#fff',
        gray:'#7B7B7B'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1366,
            xl: 1536,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    "&:hover": {
                    }
                },
                contained: {
                },
                root: {
                    "&.Mui-disabled": {
                    },
                    '&:hover': {
                    },
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'none'
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#28a19c'
                    },
                }
            }
        },
    }
});

