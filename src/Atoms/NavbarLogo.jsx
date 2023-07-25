import { Box } from '@mui/material'
import React from 'react'
import logo from "../Assets/Images/Logo.webp";

export default function NavbarLogo() {
    return <>
        <Box
            nowrap="true"
            component="a"
            href="/"
            sx={{
                display: { md: "flex" },
                color: "inherit",
                textDecoration: "none",
            }}
        >
            <img src={logo} className='w-100' alt="logo" />
        </Box>
    </>
}
