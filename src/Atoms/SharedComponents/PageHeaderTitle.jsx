import { Stack, Typography } from '@mui/material'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function PageHeaderTitle({ title, subtitle }) {
    const {blackTwo} = useThemePalette()
    return <>
        <Stack
            justifyContent='center'
            alignItems='center'
            sx={{ mt:'6.25rem' , pb : '2.5rem' }}
        >
            <Typography
                variant='h2'
                marginBottom='1rem'
                color='secondary.main'
                fontSize='2rem'
                fontWeight='700'
            >
                {title}
            </Typography>
            <Typography
                fontSize='0.8125rem'
                width='234px'
                textAlign='center'
                fontWeight='500'
                color={blackTwo}
            >
                {subtitle}
            </Typography>
        </Stack>
    </>
}
