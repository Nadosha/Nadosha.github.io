import React, { useEffect, useState } from 'react'
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { GridApi, GridReadyEvent } from 'ag-grid-community'
import { useWindowSize } from '@Hooks/useWindowSize'
import { useContainerWidth } from '@Hooks/useContainerWidth'

interface DataTablePropsI {
    theme?: string
    debounce?: number
}
export const DataTable = ({
    onGridReady,
    theme = 'ag-theme-alpine',
    debounce = 100,
    ...props
}: AgGridReactProps & DataTablePropsI) => {
    const [gridApi, setGridApi] = useState<GridApi | undefined>()
    const [windowWidth] = useWindowSize(debounce)
    const { width: containerWidth, ref } = useContainerWidth(debounce)

    useEffect(() => {
        if (gridApi) {
            gridApi.sizeColumnsToFit()
        }
    }, [windowWidth, containerWidth, gridApi])

    function handleGridReady(event: GridReadyEvent) {
        if (onGridReady) {
            onGridReady(event)
        }
        setGridApi(event.api)
    }

    return (
        <div style={{ height: '100%' }} ref={ref}>
            <AgGridReact
                paginationPageSize={50}
                onGridReady={handleGridReady}
                pagination={true}
                readOnlyEdit={true}
                {...props}
            />
        </div>
    )
}
