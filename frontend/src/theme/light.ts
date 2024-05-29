import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const Light = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
        },
    },
});

export default Light;