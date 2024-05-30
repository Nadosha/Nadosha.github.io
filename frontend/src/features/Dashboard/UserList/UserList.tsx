import { ColDef } from 'ag-grid-community'
import { DataTable } from '@Components/DataTable/DataTable'
import { useThemeMode } from '@Theme/lib/ThemeToggleProvider'
import ImageCellRenderer from '@Components/DataTable/ImageRender'
import ActionCellRender from '@Components/DataTable/ActionCellRender'
import { ReactNode } from 'react'

interface UserListI {
    data: any[]
}
const UserList: React.FC<UserListI> = ({ data }) => {
    const { themeMode } = useThemeMode()

    const colDef: ColDef[] = [
        { field: 'picture', headerName: 'Avatar', cellRenderer: ImageCellRenderer },
        { field: 'name', headerName: 'Name', editable: true, filter: true },
        { field: 'gender', headerName: 'Gender', editable: true, filter: true },
        { field: 'age', headerName: 'Age', editable: true },
        { field: 'company', headerName: 'Company', editable: true, filter: true },
        { field: 'balance', headerName: 'Balance', editable: true },
        { field: 'email', headerName: 'Email', editable: true },
        { field: 'isActive', headerName: 'Active', editable: true },
        {
            field: '_id',
            headerName: 'Delete',
            cellRenderer: ActionCellRender,
        },
    ]

    const handleCellValueChanged = (event: any) => {
        const { column, newValue } = event
        //Extend with appropriate functionality
        console.log('ColIUD', column.colId, 'Value:', event.data)
    }

    return (
        <div
            style={{ width: '100%', height: '500px' }}
            className={`ag-theme-quartz${themeMode === 'dark' ? '-' + themeMode : ''}`}
        >
            <DataTable
                rowData={data}
                columnDefs={colDef}
                onCellValueChanged={handleCellValueChanged}
            />
        </div>
    )
}

export default UserList
