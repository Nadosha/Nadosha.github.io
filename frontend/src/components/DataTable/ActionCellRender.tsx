import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const ActionCellRender: React.FC<{ value: string }> = ({ value }) => {
    //Extend with appropriate functionality
    return (
        <IconButton
            aria-label="delete"
            color="error"
            onClick={() => console.log('id to delete: ', value)}
        >
            <DeleteIcon />
        </IconButton>
    )
}

export default ActionCellRender
