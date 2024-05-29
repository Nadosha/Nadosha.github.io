import {handleImageError} from "@Utils/handleImageError";
import React from "react";
import {Stack} from "@mui/material";

export const NotFound = () => {
    return (
        <Stack>
            <h1 style={{textAlign: 'center'}}>404 | Page not Found  <a href='/'><strong>Go Back</strong></a></h1>

            <img src='/404.jpeg' alt='no data to display' onError={handleImageError} loading="lazy"
                 style={{
                     display: 'block',
                     objectFit: 'cover',
                     width: '40%',
                     backgroundColor: '#fff',
                     margin: 'auto'
                 }}/>
        </Stack>
    )
}