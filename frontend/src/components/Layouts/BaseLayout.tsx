import React from "react";
import {Box, Stack} from "@mui/material";
import NavBar from "@Components/UI/NavBar";
import {Outlet} from "react-router-dom";

const BaseLayout = () => {
    return (
        <Stack>
            <NavBar/>
            <Box style={{marginTop: '60px'}}>
                <Outlet/>
            </Box>
        </Stack>
    )
}

export  default BaseLayout;