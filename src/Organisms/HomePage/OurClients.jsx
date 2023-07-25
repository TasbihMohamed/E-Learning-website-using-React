import React, { useState } from 'react'
import apple from '../../Assets/Images/apple.webp'
import google from '../../Assets/Images/google.webp'
import ibm from '../../Assets/Images/ibm.webp'
import intel from '../../Assets/Images/intel.webp'
import microsoft from '../../Assets/Images/microsoft.webp'
import { Box, Button, Container, Typography } from '@mui/material'
import PageHeaderTitle from '../../Atoms/SharedComponents/PageHeaderTitle'
import { Stack } from '@mui/system'

export default function OurClients() {
    const imgs = [
        { imgSrc: apple },
        { imgSrc: google },
        { imgSrc: ibm },
        { imgSrc: intel },
        { imgSrc: microsoft },
        { imgSrc: apple },
        { imgSrc: google },
        { imgSrc: ibm },
        { imgSrc: intel },
        { imgSrc: microsoft },
        { imgSrc: apple },
        { imgSrc: google },
        { imgSrc: ibm },
        { imgSrc: intel },
        { imgSrc: microsoft },
        { imgSrc: apple },
        { imgSrc: google },
        { imgSrc: ibm },
        { imgSrc: intel },
        { imgSrc: microsoft },
    ]
    const [viewAll, setViewAll] = useState(false)
    const [size, setSize] = useState(5)
    return <>
        <Container sx={{ pb: '3.5rem' }}>
            {/* ---------------------------- display section title and view all button----------------------------------- */}
            <Stack direction='row' position='relative' >
                <Box alignSelf='center' justifySelf='center' margin='auto'>
                    <PageHeaderTitle title='Our Client' />
                </Box>
                <Box position='absolute' right={{ md: '40px', xs: '-40px' }} top={{ md: '30%', xs: '50%' }} >
                    {!viewAll ?
                        <Button onClick={_ => {
                            setViewAll(!viewAll)
                            setSize(imgs.length)
                        }}
                            sx={{
                                height: 'fit-content',
                                minWidth: '129px',
                                mr: '40px',
                                alignSelf: 'center',
                                marginTop: { md: '40px' }
                            }}
                        >
                            View All
                        </Button>
                        :
                        <Button onClick={_ => {
                            setViewAll(!viewAll)
                            setSize(5)
                        }}
                            sx={{ height: 'fit-content', minWidth: '129px', mr: '40px', alignSelf: 'center', marginTop: { md: '40px' } }}
                        >
                            View Less
                        </Button>
                    }
                </Box>
            </Stack>
            {/* ---------------------------------- Our clients  -------------------------------------- */}
            <Stack direction={{ sm: 'row' }} alignItems='center' justifyContent='space-between' flexWrap='wrap' >
                {imgs.slice(0, size).map((img, i) =>
                    <Stack key={i} justifyContent='space-between' my='20px' alignItems='center' sx={{ width: { md: 'calc(100% * (1/5) - 10px - 1px)'  , sm :'40%'} }} >
                        <img src={img.imgSrc} alt='our clients' style={{ width: '58.41px', height: '69px' }} />
                    </Stack>
                )}
            </Stack>
        </Container>
    </>
}
