import ToggleTheme from "@Components/UI/ToggleTheme";
import React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import AppBar from "@mui/material/AppBar";

const NavBar = () => {
    return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                <AcUnitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flex: 1
                    }}
                >
                    Heartpace
                </Typography>

                <AcUnitIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 0}} />

                <Box sx={{ display:'flex', justifySelf: 'flex-end', flex: 0, justifyContent: 'end', marginRight: 0 }}>
                    <Tooltip title="Open settings">
                        <ToggleTheme/>
                    </Tooltip>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
    )
};

export  default  React.memo(NavBar);