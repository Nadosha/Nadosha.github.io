import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const Light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
            contrastText: '#383636',
        },
    },
})

export default Light
