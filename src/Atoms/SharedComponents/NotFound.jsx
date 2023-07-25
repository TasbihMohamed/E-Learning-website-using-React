import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'primary.main',
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={handleClick} aria-label='back to home'>Back Home</Button>
        </Box>
    </>
}
