import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ICellRendererParams } from 'ag-grid-community'

interface CustomButtonParamsI extends ICellRendererParams {
    value: string
    onClick: (userId: string) => void
}
const ActionCellRender = ({ value, onClick }: CustomButtonParamsI) => (
    <IconButton aria-label="delete" color="error" onClick={() => onClick(value)}>
        <DeleteIcon />
    </IconButton>
)

export default ActionCellRender
