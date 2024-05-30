import { ColDef } from 'ag-grid-community'
import { DataTable } from '@Components/DataTable/DataTable'
import { useThemeMode } from '@Theme/lib/ThemeToggleProvider'
import ImageCellRenderer from '@Components/DataTable/ImageRender'
import ActionCellRender from '@Components/DataTable/ActionCellRender'

const UserList = () => {
    const { themeMode } = useThemeMode()

    const colDef: ColDef[] = [
        { field: 'picture', headerName: 'Avatar', cellRenderer: ImageCellRenderer },
        { field: 'name', headerName: 'Name', editable: true },
        { field: 'gender', headerName: 'Gender', editable: true },
        { field: 'age', headerName: 'Age', editable: true },
        { field: 'company', headerName: 'Company', editable: true },
        { field: 'balance', headerName: 'Balance', editable: true },
        { field: 'email', headerName: 'Email', editable: true },
        { field: 'isActive', headerName: 'Active', editable: true },
        {
            field: '_id',
            headerName: 'Delete',
            cellRenderer: ActionCellRender,
        },
    ]

    // After redux added, DELETE this
    const data = [
        {
            _id: '6656e922f031bf5a18048271',
            isActive: true,
            balance: '$1,542.33',
            picture: 'https://media.shally.app/heroes/kawaii-boy.jpg',
            age: 29,
            name: 'Tami Allison',
            gender: 'female',
            company: 'TALENDULA',
            email: 'tamiallison@talendula.com',
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
