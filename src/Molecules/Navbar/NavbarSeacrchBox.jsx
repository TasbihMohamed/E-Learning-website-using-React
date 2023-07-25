import { IconButton, InputBase, Paper, Stack } from '@mui/material'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte';
import SearchIcon from "@mui/icons-material/Search";

export default function NavbarSeacrchBox() {
    const { warmGrey } = useThemePalette();

    return <>
        <Stack
            sx={{
                display: { xs: "none", md: "flex" },
            }}
        >
            {/* ------------------------------- Navbar Search bar ------------------------ */}
            <Paper
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: 500,
                    boxShadow: 0,
                    border: 1,
                    borderColor: warmGrey,
                }}
            >
                {/* ----------------------------- Input ---------------------------------- */}
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="What do you want to learn?"
                    inputProps={{ "aria-label": "What do you want to learn?" }}
                />
                {/* ----------------------------- search icon ---------------------------- */}
                <IconButton
                    type="button"
                    sx={{
                        p: "5px 15px",
                        m: "0",
                        borderRadius: "0px",
                        color: "white",
                        bgcolor: "primary.main",   
                    }}
                    variant='contained'
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Stack>
    </>
}
