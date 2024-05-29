import React from "react";
import {Box, Stack} from "@mui/material";
import NavBar from "@Components/UI/NavBar";
import {Outlet, useLocation} from "react-router-dom";
import PageTitle from "@Components/UI/PageTitle";
import {getPageTitle} from "@Utils/getPageTitle";

const BaseLayout = () => {
    const location = useLocation()
    const getPage = getPageTitle(location.pathname);
    return (
        <Stack>
            <NavBar/>
            <Box >
                <PageTitle>{getPage}</PageTitle>
                <Outlet/>
            </Box>
        </Stack>
    )
}

export  default BaseLayout;