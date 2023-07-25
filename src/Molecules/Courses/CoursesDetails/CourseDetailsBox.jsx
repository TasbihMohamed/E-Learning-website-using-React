import { Box, Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CoursesDetailsBoxTitle from '../../../Atoms/SharedComponents/CoursesDetailsBoxTitle'
import { useThemePalette } from '../../../Theme/useThemePalatte'

export default function CourseDetailsBox({ action, title, actionTitle, children, pt, px, childrenMb }) {
    const { primaryColor } = useThemePalette()
    return <>
        <Stack borderRadius='10px' sx={{ my: '32px', bgcolor: '#fff', boxShadow: '1px 1px 6px 0 rgba(0, 0, 0, 0.16)'}}  >
            <Stack pt={pt} px={px} >
                <CoursesDetailsBoxTitle title={title} />
                <Box mb={childrenMb}>
                    {children}
                </Box>
                {action &&
                    <Box>
                        <Button sx={{ fontSize: '18px', fontWeight: '600', mb: '32px', px: 0 }}>{actionTitle}</Button>
                    </Box>
                }
            </Stack>
        </Stack>
    </>
}
