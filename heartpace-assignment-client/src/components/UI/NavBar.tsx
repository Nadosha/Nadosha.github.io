import React, { useCallback } from 'react'
import AddUserDrawer from '@Components/UI/Drawer'

import { Container, Toolbar, Typography, Box, Tooltip, AppBar, Button } from '@mui/material'

import ToggleTheme from '@Components/UI/ToggleTheme'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const NavBar = () => {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = useCallback(() => {
        setOpen(!open)
    }, [open, setOpen])

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <AcUnitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                            flex: 1,
                        }}
                    >
                        Heartpace
                    </Typography>

                    <AcUnitIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 0 }} />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifySelf: 'end',
                            flex: 1,
                            justifyContent: 'end',
                            marginRight: 0,
                        }}
                        gap={2}
                    >
                        <Tooltip title="Switch Theme">
                            <ToggleTheme />
                        </Tooltip>
                        <Tooltip title="Add New User to list">
                            <Button
                                variant="outlined"
                                color="success"
                                sx={{ maxWidth: '120px' }}
                                onClick={toggleDrawer}
                            >
                                Add User
                            </Button>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
            <AddUserDrawer isOpen={open} onClose={toggleDrawer} />
        </AppBar>
    )
}

export default React.memo(NavBar)
