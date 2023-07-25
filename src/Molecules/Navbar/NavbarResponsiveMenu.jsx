import { Box, IconButton, Menu } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";

export default function NavbarResponsiveMenu({ children }) {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    return <>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {/* ------------------------------ Responsive Menu Icon ------------------------------ */}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                {/* ------------------------------ Responsive DropDown Menu ------------------------------ */}
                {children}
            </Menu>
        </Box>
    </>
}
