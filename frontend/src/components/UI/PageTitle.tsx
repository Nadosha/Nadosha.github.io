import Typography from "@mui/material/Typography";
import React, {ReactNode} from "react";
import AppsIcon from '@mui/icons-material/Apps';
import {Stack} from "@mui/material";

const PageTitle: React.FC<{ children: ReactNode }> = ({children}) => {

    return (
        <Stack direction='row' alignItems='center'  justifyContent='center' sx={{  flex: 1, borderBottom: '1px solid #E0E0E0'}}>
            <AppsIcon/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    m: 2,
                    display: 'flex',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',


                }}
            >
                {children}
            </Typography>
        </Stack>

    )
}

export default  React.memo(PageTitle);