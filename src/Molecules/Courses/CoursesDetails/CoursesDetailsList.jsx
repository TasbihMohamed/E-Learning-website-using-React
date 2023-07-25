import { Stack, Typography } from '@mui/material'
import React from 'react'
import CoursesDetailsBoxTitle from '../../../Atoms/SharedComponents/CoursesDetailsBoxTitle'
import { useThemePalette } from '../../../Theme/useThemePalatte'

export default function CoursesDetailsList({ titleIcon, listTitle, descriptionIcon, data }) {
    const { warmGrey4, blackTwo } = useThemePalette()

    return <Stack my='32px' borderBottom={`1px solid ${warmGrey4}`} >
        <Stack direction='row' mb='16px' columnGap='9px' >
            <img alt='icon' src={titleIcon} />
            <CoursesDetailsBoxTitle title={listTitle} fontSize='20px' mb='0' />
        </Stack>
        <Stack direction='row' mb='32px' justifyContent='space-between'>
            <Typography color={blackTwo} fontSize='15px' >{data?.title}</Typography>
            <img alt='icon' src={descriptionIcon} />
        </Stack>
    </Stack>
}
