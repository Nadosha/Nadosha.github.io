import { handleImageError } from '@Utils/handleImageError'
import React from 'react'
import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'

export const NotFound = () => (
    <Stack mt={3}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
            404 | Page not Found{' '}
            <a href="/">
                <strong>Go Back</strong>
            </a>
        </Typography>

        <img
            src="/404.jpeg"
            alt="no data to display"
            onError={handleImageError}
            loading="lazy"
            style={{
                display: 'block',
                objectFit: 'cover',
                width: '40%',
                backgroundColor: '#fff',
                margin: 'auto',
            }}
        />
    </Stack>
)
