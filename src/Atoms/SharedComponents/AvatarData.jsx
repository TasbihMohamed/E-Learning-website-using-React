import { Avatar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useThemePalette } from '../../Theme/useThemePalatte'

export default function AvatarData({ avatarImg, name, avatarHeight, avatarWidth, nameColor }) {
    const { blackTwo } = useThemePalette()
    return <>
        <Stack direction='row' alignItems='center' >
            <Box>
                <Avatar
                    alt="Remy alioSharp"
                    src={avatarImg}
                    sx={{ height: avatarHeight, width: avatarWidth }}
                />
            </Box>
            <Box item >
                <Typography margin='6px 43px 6px 8px' color={nameColor ? nameColor : blackTwo} fontWeight='600' >{name}</Typography>
            </Box>
        </Stack>
    </>
}
