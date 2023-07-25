import React from 'react'
import { Box, Stack } from '@mui/material';
import { useThemePalette } from '../../Theme/useThemePalatte';
import { Typography } from '@mui/material';
// import icon from '../../Assets/Images/checkmark-circle-outline.svg'
import icon from '../../Assets/Images/checkmark-circle-outline.svg'
import Group1170 from '../../Assets/Images/Group1170.svg'
import Group1171 from '../../Assets/Images/Group1171.svg'
import Group1172 from '../../Assets/Images/Group1172.svg'
import Group1173 from '../../Assets/Images/Group1173.svg'
import Group1174 from '../../Assets/Images/Group1174.svg'
import Group1175 from '../../Assets/Images/Group1175.svg'

export default function BenefitsList({ ListIcon, children, fontSize, pl, mb, textMarginLeft, textColor, imgSrc ,iconMr}) {
    const { blackTwo } = useThemePalette()
    return <>
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='flex-start'
            paddingLeft={pl ? pl : '13px'}
            marginBottom={mb ? mb : '24px'}
            sx={{ color: blackTwo }}
        >
            {/* ----------------------------- checkmark icon ------------------------------ */}
            <Box mr={iconMr} >
                {ListIcon ? ListIcon : <img src={imgSrc ? require(`../../Assets/Images/${imgSrc}.svg`) : icon}  alt='checkmark' />}
            </Box>
            {/* ----------------------------- benefits list ------------------------------ */}
            <Box>
                <Typography
                    marginLeft={textMarginLeft ? textMarginLeft : '1.5rem'}
                    fontSize={fontSize ? fontSize : '18px'}
                    color={textColor}
                >
                    {children}
                </Typography>
            </Box>
        </Stack>
    </>
}
