import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomSlider from '../../Atoms/SharedComponents/CustomSlider'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function PopularCertificatesSlider({ certificates, setIsActive, isActive }) {
    const { blackTwo } = useThemePalette()

    const handleClick = (id) => {
        setIsActive(id);
    }

    return <>
        <CustomSlider className='home-page' slides1024={4} slides600={1} slides1020={2}>
            {certificates.map((certificate) =>
                    <Typography
                        color={blackTwo}
                        fontWeight='600'
                        padding='16px 20px'
                        my='0.5rem'
                        sx={{
                            ...(isActive === certificate.id && {
                                color: 'primary.main',
                                borderRadius: '8px',
                                bgcolor: 'info.main'
                            }),
                        }}
                        key={certificate.id}
                        onClick={_ => handleClick(certificate.id)}
                    >
                        {certificate.title}
                    </Typography>
            )}
        </CustomSlider>
    </>
}
