import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { GridApi, GridReadyEvent } from 'ag-grid-community'
import React, { useCallback, useEffect, useState } from 'react'
import { useWindowSize } from '@Hooks/useWindowSize'
import { useContainerWidth } from '@Hooks/useContainerWidth'

interface DataTableI {
    theme?: string
    debounce?: number
}
export const DataTable = ({
    onGridReady,
    theme = 'ag-theme-alpine',
    debounce = 100,
    ...props
}: AgGridReactProps & DataTableI) => {
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
        <div style={{ width: '100%', height: '100%' }} ref={ref}>
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
