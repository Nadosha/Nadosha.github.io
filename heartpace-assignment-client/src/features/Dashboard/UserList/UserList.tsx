import React, { useCallback, useEffect, useState } from 'react'
import { ColDef, CellEditRequestEvent, GetRowIdParams } from 'ag-grid-community'
import { useThemeMode } from '@Theme/lib/ThemeToggleProvider'
import ImageCellRenderer from '@Components/DataTable/ImageRender'
import ActionCellRender from '@Components/DataTable/ActionCellRender'
import { DataTable } from '@Components/DataTable/DataTable'
import { useAppDispatch } from '@Redux/store'
import { UserT } from '@Types/DataState.types'
import { deleteUser, updateUser } from '@Redux/actions'
import { formatCurrency } from '@Utils/FormatCurrency'

interface UserListI {
    data: UserT[]
}
const UserList: React.FC<UserListI> = ({ data }) => {
    const dispatch = useAppDispatch()
    const { themeMode } = useThemeMode()
    const [rowData, setRowData] = useState<UserT[]>()

    useEffect(() => {
        setRowData(data)
    }, [data])

    const handleDelete = useCallback(
        (userId: string) => {
            dispatch(deleteUser(userId))
        },
        [dispatch]
    )

    const colDef: ColDef[] = [
        { field: 'picture', headerName: 'Avatar', cellRenderer: ImageCellRenderer, maxWidth: 60 },
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            filter: true,
        },
        { field: 'gender', headerName: 'Gender', editable: true, filter: true },
        { field: 'age', headerName: 'Age', editable: true },
        { field: 'company', headerName: 'Company', editable: true, filter: true },
        {
            field: 'balance',
            headerName: 'Balance',
            editable: true,
            valueFormatter: (params) => {
                const { value } = params
                if (typeof value === 'string' && /^\$\d{1,3}(,\d{3})*(\.\d{1,2})?$/.test(value)) {
                    return value // Return the value as is
                } else {
                    return formatCurrency(value)
                }
            },
        },
        { field: 'email', headerName: 'Email', editable: true },
        { field: 'isActive', headerName: 'Active', editable: true },
        {
            field: '_id',
            headerName: 'Delete',
            cellRenderer: ActionCellRender,
            cellRendererParams: {
                onClick: handleDelete,
            },
        },
    ]

    const handleCellValueChanged = useCallback(async (event: CellEditRequestEvent) => {
        const oldData = event.data
        const field = event.colDef.field
        const newData = { ...oldData }
        newData[field! as keyof UserT] = event.newValue

        const tx = {
            update: [newData],
        }

        try {
            dispatch(updateUser({ user: newData }))
        } catch (err: any) {
            throw new Error('Error:', err.message)
        }

        event.api.applyTransaction(tx)
    }, [])

    return (
        <div
            style={{ width: '100%', height: '500px' }}
            className={`ag-theme-quartz${themeMode === 'dark' ? '-' + themeMode : ''}`}
        >
            <DataTable
                rowData={rowData}
                columnDefs={colDef}
                onCellEditRequest={handleCellValueChanged}
                getRowId={(params: GetRowIdParams) => params.data._id}
            />
        </div>
    )
}

export default UserList
