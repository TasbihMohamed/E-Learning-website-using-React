import React from "react";
import { AppBar, Box, Stack, Toolbar, } from "@mui/material";
import { useThemePalette } from "../../Theme/useThemePalatte";
import NavbarButtons from "../../Molecules/Navbar/NavbarButtons";
import NavbarSeacrchBox from "../../Molecules/Navbar/NavbarSeacrchBox";
import NavbarLogo from "../../Atoms/NavbarLogo";
import NavbarResponsiveMenu from "../../Molecules/Navbar/NavbarResponsiveMenu";

export default function Navbar() {
    const { whiteColor } = useThemePalette();

    return <>
        <AppBar position="static" sx={{ bgcolor: whiteColor, boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.08)' }}  >
            <Box
                px={{ md: '0.5rem' }}
            >
                <Toolbar style={{ paddingRight: 0, paddingLeft: 0 }} >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                    // spacing={1}
                    >
                        {/* ------------------------------- Web LOGO -------------------------------- */}
                        <NavbarLogo />
                        {/*-------------------------------- Web Search Box ----------------------------*/}
                        <NavbarSeacrchBox />
                        {/* ------------------------------- Right Logo ------------------------------- */}
                        <NavbarButtons display='none' />
                        {/* ------------------------------- Responsive Menu Icon ---------------------- */}
                        <NavbarResponsiveMenu>
                            <NavbarButtons display='flex' />
                        </NavbarResponsiveMenu>
                    </Stack>
                </Toolbar>
            </Box>
        </AppBar>
    </>
}
