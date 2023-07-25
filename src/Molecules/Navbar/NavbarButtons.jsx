import { Box, Button, Stack } from '@mui/material'
import shoppingCard from '../../Assets/Images/feather-shopping-cart.svg'

export default function NavbarButtons({ display }) {
    return <>
        {/* -------------------------------- Navbar button container --------------------------- */}
        <Box
            display={{ xs: display, md: "flex" }}
        >
            <Stack
                flexDirection={{ xs: 'column', md: "row" }}
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                {/* -------------------------------- Shopping Card icom ------------------------- */}
                <Box
                    sx={{ cursor: "pointer" }}
                    color="primary.main"
                    mx={{ lg: '1rem', md: '0rem' }}
                    my='0.5rem'
                >
                    <img src={shoppingCard} alt='shopping card' />
                </Box>
                {/* ---------------------------- Login Button ----------------------------------- */}
                <Button
                    disableElevation
                    disableRipple
                    variant="text"
                    aria-label='login'
                >
                    Login
                </Button>
                {/* ----------------------------- SignUp Button --------------------------------- */}
                <Button
                    disableElevation
                    disableRipple
                    variant="contained"
                    sx={{ ml: { lg: '1rem', md: '0rem' }, my: '0.5rem', p: { lg: '9px 27px', md: '5px 10px' } }}
                    aria-label='sign up'
                >
                    Sign Up
                </Button>
            </Stack>
        </Box >
    </>
}
