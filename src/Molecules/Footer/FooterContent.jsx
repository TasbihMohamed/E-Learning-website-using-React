import { List, ListItem, ListItemText, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

export default function FooterContent({ title, list , ...rest}) {
    return <>
        <Stack {...rest}>
            <Typography
                fontSize='26px'
                fontWeight='600'
                color='primary.main'
            >
                {title}
            </Typography>
            <List>
                {list && list.map((item, i) =>
                    <ListItem key={i} sx={{ pl: '0' }}>
                        <ListItemText
                            sx={{ m: '0' }}
                            primary={item.listText}
                        />
                    </ListItem>
                )}
            </List>
        </Stack>
    </>
}