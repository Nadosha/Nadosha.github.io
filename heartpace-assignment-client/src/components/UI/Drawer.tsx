import React, { ReactNode, useEffect } from 'react'
import { Drawer } from '@mui/material'
import AddNewUserForm from '@Components/AddNewUserForm/AddNewUser.form'

interface AddUserDrawerProps {
    isOpen: boolean
    onClose: () => void
}
const AddUserDrawer: React.FC<AddUserDrawerProps> = ({ isOpen, onClose }) => (
    <>
        <Drawer
            variant="temporary"
            anchor="right"
            open={isOpen}
            onClose={onClose}
            sx={{ minWidth: '350px' }}
        >
            <AddNewUserForm closeDrawer={onClose} />
        </Drawer>
    </>
)

export default React.memo(AddUserDrawer)
