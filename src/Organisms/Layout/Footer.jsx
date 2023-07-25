import { Grid, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/material'
import React from 'react'
import FooterDesc from '../../Molecules/Footer/FooterDesc'
import { useThemePalette } from '../../Theme/useThemePalatte'
import FooterContent from '../../Molecules/Footer/FooterContent'

export default function Footer() {
    const { blackTwo, whiteTwo } = useThemePalette()

    const sitemapList = [
        { listText: 'Home' },
        { listText: 'About us' },
        { listText: 'Contact us' }
    ]
    const ourClientsList = [
        { listText: 'IBM' },
        { listText: 'Intell' },
        { listText: 'Apple' }
    ]
    const supportList = [
        { listText: 'Terms & Conditions' },
        { listText: 'Privacy Policy' },
    ]
    const lists = [
        { title: 'Sitemap', list: sitemapList },
        { title: 'Our Clients', list: ourClientsList },
        { title: 'Support', list: supportList },
    ]

    return <>
        <Container sx={{ my: '6.25rem' }}>
            <Grid container
                columnSpacing={13.75}
                rowSpacing={3}
                color={blackTwo}
            >
                <Grid item lg={4} sm={6} xs={10} >
                    <Box>
                        <FooterDesc />
                    </Box>
                </Grid>
                {lists.map((list, i) => <Grid key={i} item lg sm={6} xs={10} >
                    <Box>
                        <FooterContent title={list.title} list={list.list} />
                    </Box>
                </Grid>
                )}
            </Grid>
        </Container>

        <Box
            bgcolor={whiteTwo}
            paddingY='2.5rem'
        >
            <Stack
                alignItems='center'
            >
                <Typography
                    color={blackTwo}
                    fontSize='14px'
                    fontWeight='600'
                >
                    Designed and developed at inova LLC
                </Typography>
            </Stack>
        </Box>
    </>
}
