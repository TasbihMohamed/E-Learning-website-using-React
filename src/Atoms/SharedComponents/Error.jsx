import { Alert } from '@mui/material'
import React from 'react'

export default function Error({title}) {
    return <>
        <Alert severity="error" variant="filled" >
            Error Fetching {title}....
        </Alert>
    </>
}
